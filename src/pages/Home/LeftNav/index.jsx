import React, { useState } from 'react'
import store from '@/redux/store.js'
import { changeArticleType } from '@/redux/actions/articleType.js'
import './index.less'

export default function LeftNav() {
  const [isClickRecent, setIsClickRecent] = useState(true)

  const clickRecentHandler = () => {
    setIsClickRecent(true)
    store.dispatch(changeArticleType('recent'))
  }

  const clickHotHandler = () => {
    setIsClickRecent(false)
    store.dispatch(changeArticleType('hot'))
  }

  return (
    <>
      <div
        className={ isClickRecent ? "item current" : "item" } onClick={clickRecentHandler}
      >最新发布</div>
      <div 
        className={ isClickRecent ? "item hot" : "item hot current" } onClick={clickHotHandler}
      >最热文章</div>
    </>
  )
}
