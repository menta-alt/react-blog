import React from 'react'
import './index.less'

export default function ClassItem(props) {
  const {title, count} = props
  return (
    <li>
      <span>{title}</span>
      <span>{count}</span>
    </li>
  )
}
