import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import { graphql } from "gatsby"

const BookTemplate = props => {
  console.log(props)
  const { title, author, summary, localImage } = props.data.book
  return (
    <Layout>
      <BookItem
        bookCover={localImage.childImageSharp.fixed}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      />
    </Layout>
  )
}

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
`

export default BookTemplate
