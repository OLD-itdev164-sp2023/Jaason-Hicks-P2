import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { H1 } from '../components/Heading';
import { BuyButton } from '../components/Button'

const SaleItem = ({ data }) => {
    const { name, description, heroImage, price, saleDate } = data.contentfulItemSale;

    return(
        <Layout>
            <GatsbyImage
              image={heroImage.gatsbyImageData}
            />
            <H1>{name} ${price}</H1>
            <BuyButton variant="primary" />
            <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div>
            <p3>sale date {saleDate}</p3> 
        </Layout>
    )
}

export default SaleItem;

export const pageQuery = graphql`
query itemSaleQuery($slug: String!)
{
  contentfulItemSale(slug: {eq: $slug}) 
  {
    name
    slug
    description
    {
      childMarkdownRemark 
      {
        html
      }
    }
    price
    saleDate
    heroImage 
    {
      gatsbyImageData(
        layout: CONSTRAINED, 
        placeholder: BLURRED, 
        width: 960)
    }
  }
}
`