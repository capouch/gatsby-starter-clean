import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Food Information 6 January 2019
        </h1>
        <p><b>Monday Lunch</b></p>
        <p>He said he would have the Hoosier Stew for lunch.</p>
        <p><b>Monday Dinner</b></p>
        <p>He is planning to eat the shrimp alfredo Pat got set up for him.</p>
      </div>
    )
  }
}
