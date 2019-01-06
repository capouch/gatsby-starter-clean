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
        <p>There is sliced bread in the freezer.  I'll get out four slices.
        There's a baggie in the fridge with ham and cheese slices.  Also some
        rice pudding for dessert.</p>
        <p><b>Monday Dinner</b></p>
        <p>Hoosier Stew, in a pint container in the fridge.  Just needs put into a
        bowl and warmed up.</p>
      </div>
    )
  }
}
