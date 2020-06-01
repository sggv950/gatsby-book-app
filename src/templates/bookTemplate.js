import React, { useContext } from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem";
import { BookComments } from "../components/common/BookComments";
import { graphql } from "gatsby";
import { FirebaseContext } from "../components/Firebase";

const BookTemplate = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const { title, author, summary, localImage, id } = props.data.book;
  return (
    <section>
      <BookItem
        bookCover={localImage.childImageSharp.fixed}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      />
      {!!firebase && <BookComments bookId={id} firebase={firebase} />}
    </section>
  );
};

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      title
      summary
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      id
      author {
        name
      }
    }
  }
`;

export default BookTemplate;
