import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";

const CommentForm = styled.form`
  display: flex;
  margin-top: 32px;

  ${Input} {
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${Button} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const CommentListItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 4px 0px;

  > strong {
    font-size: 80%;
    color: #666;
  }
`;

export const BookComments = ({ firebase, bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookComments({
      bookId,
      onSnapshot: (snapshot) => {
        console.log(snapshot);
        const snapshotComments = [];
        snapshot.forEach((doc) => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setComments(snapshotComments);
      },
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const [commentText, setCommentText] = useState('');

  const handleCommentInput = (e) => {
    e.persist();
    setCommentText(e.target.value)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    firebase.postComment({
      text: commentText,
      bookId
    }). then(() => setCommentText(''))
  }

  return (
    <div>
      <CommentForm onSubmit={handleCommentSubmit}>
        <Input value={commentText} onChange={handleCommentInput} />
        <Button type="submit">Post comment</Button>
      </CommentForm>
      {comments.map((comment) => (
        <CommentListItem key={comment.id}>
          <strong> {comment.username} </strong>
          <div>{comment.text}</div>
        </CommentListItem>
      ))}
    </div>
  );
};
