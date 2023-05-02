import React from "react";
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import  Layout  from "../components/layout";
import Seo from "../components/seo"

const Contact = ({data}) =>{
    const { name, company, address } = data.site.siteMetadata.contact;
    return(
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Us </h1>
            <p>Please send all inpueries to: </p>
            <p>{company}</p>
            <p>{`C/O ${name}`}</p>
            <p>{address}</p>
            <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="../images/Random.jpg"
                    width={500}
                    quality={95}
                    formats={["auto","webp","avif"]}
                    alt="A Gatsby icon"
                    style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
    query
    {
        site
        {
            siteMetadata
            {
                contact
                {
                    name
                    company
                    address
                }
            }
        }
    }
`