import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'

export default function StatisticsCard() {

  return (
    <div className='statisticsCard'> 
      <div className='dataItem'>
        <Link to='/search' className='title'>文章</Link>
        <p>12</p>
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
