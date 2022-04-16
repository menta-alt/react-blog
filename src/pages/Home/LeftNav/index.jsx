import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

export default function LeftNav() {
  return (
    <>
      <NavLink className="item hot" to='hot'>最热文章</NavLink>
      <NavLink className="item" to='recent'>最新发布</NavLink>
    </>
  )
}
