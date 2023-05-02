import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Box, Card, Heading } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Grid = styled(Box)`
box-sizing: border-box;
margin: 0px;
min-width: 0px;
display: grid;
gap: 100px;
grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Grid>
      {
        data.allContentfulItemSale.edges.map(edge => (
          <Card width={300} p={3} key={edge.node.id}>
            <Link to={edge.node.slug}>
              <GatsbyImage
                image={edge.node.heroImage.gatsbyImage}
              />
            </Link>
            <Heading>{edge.node.name}</Heading>
          </Card>
        ))
      }
    </Grid>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulItemSale
  {
    edges
    {
      node
      {
        name
        slug
        description
        {
          childMarkdownRemark
          {
            excerpt
          }
        }
        heroImage
        {
          gatsbyImage
          (
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 600
          )
        }
      }
    }
  }
}
`