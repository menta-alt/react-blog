import React, { useState } from 'react'
import EditorBox from './EditorBox'
import CommentList from './CommentList'
import PubSub from 'pubsub-js' 
import { Divider } from 'antd';

export default function Comment() {
  const [articleId, setArticleId] = useState(-1)
  const [commentCount, setCommentCount] = useState(0)

  PubSub.subscribe("sendArticleId", (method, id) => setArticleId(id))
  PubSub.subscribe("commentCount", (method, commentCount) => setCommentCount(commentCount))
  return (
    <div>
      <Divider orientation="left" className='commentLine'>评论</Divider>
      <EditorBox level={1} title="发布评论" articleId={articleId} />
      <Divider>{commentCount}条留言</Divider>
      <CommentList/>
    </div>
  )
}
