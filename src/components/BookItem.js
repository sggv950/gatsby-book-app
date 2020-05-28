import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 5px;
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.6);
  display: flex;
`

const BookItemImageWrapper = styled.div`
  max-width: 200px;
  img {
    max-width: 200px;
  }
`

const BookItemContentWrapper = styled.div`
  padding-left: 20px;
  flex-grow: 1;
  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`

const BookItem = ({
                      authorName,
                      bookTitle,
                      bookSummary,
                      bookCover,
                      children,
                  }) => {
    return (
        <BookItemWrapper>
            <BookItemImageWrapper>
                <Img fixed={bookCover}/>
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>
                    {bookTitle}
                </h2>
                <p>{authorName}</p>
                <p>{bookSummary}</p>
                <div>{children}</div>
            </BookItemContentWrapper>
        </BookItemWrapper>
    )
}

export default BookItem
