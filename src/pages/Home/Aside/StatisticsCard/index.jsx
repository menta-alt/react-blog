import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import PubSub from 'pubsub-js'
import './index.less'

export default function StatisticsCard() {
  const [articleSum, setArticleSum] = useState(0)

  useEffect(() => {
    PubSub.subscribe('articleCount', function(method,len) {
      setArticleSum(len)
    })
  },[])
  
  return (
    <div className='statisticsCard'> 
      <div className='dataItem'>
        <Link to='/search' className='title'>文章</Link>
        <p>{articleSum}</p>
      </div>
      <div className='dataItem'>
        <Link to='/tag' className='title'>标签</Link>
        <p>234</p>
      </div>
      <div className='dataItem'>
        <Link to='/classes' className='title'>分类</Link>
        <p>710</p>
      </div>
    </div>
  )
}
