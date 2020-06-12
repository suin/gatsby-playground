import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMedataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>{data.site.siteMetadata.title}</div>
  );
}

export default IndexPage
