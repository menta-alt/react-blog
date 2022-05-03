import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

export default function BlogItemCard(props) {
  const { id, title, description, time, viewCounts, commentCounts } = props

  return (
    <li className="blogItem">
      <NavLink
        to={`/articles/details/${id}`}
        state= {{ title, time, viewCounts, commentCounts }}
      >
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="info">
          {time}&nbsp;&nbsp;&nbsp;阅读量 {viewCounts}
        </p>
      </NavLink>
    </li>
  )
}
