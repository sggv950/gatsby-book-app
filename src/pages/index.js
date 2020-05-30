import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
// import Image from "../components/image"
// import SEO from "../components/seo"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 10px;
    background: darkblue;
    color: white;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background: blue;
    }
  }
`

const IndexPage = props => {
  return (
    <section>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          key={edge.node.id}
          bookCover={edge.node.localImage.childImageSharp.fixed}
          authorName={edge.node.author.name}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Join Conversation</Link>
          </LinkButton>
        </BookItem>
      ))}
    </section>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
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
    }
  }
`

export default IndexPage
