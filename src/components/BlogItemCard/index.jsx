import React from 'react'
import './index.less'

export default function BlogItemCard(props) {
  const {title, description, time, visitcount} = props
  return (
    <li className='blogItem'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
      <p className='info'>{time}&nbsp;&nbsp;&nbsp;阅读量 {visitcount}</p>
    </li>
  )
}
