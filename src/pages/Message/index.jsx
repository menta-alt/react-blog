import React from 'react'
import PublishComment from '@/components/Comment/PublishComment'
import CommentArea from '@/components/Comment/CommentArea'

import './index.less'

export default function Message() {
  return (
    <div>
       {/* 上方导语 */}
       <div className="intro">
        <h1>留言板</h1>
      </div>

      <div className="mainContent">
        <div className="comment">
          <p className='info'>欢迎大家给我留言呀😄</p>
          <CommentArea/>
          <PublishComment/>
        </div>
      </div>
    </div>
  )
}
