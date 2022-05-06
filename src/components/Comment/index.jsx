import React from 'react'
import EditorBox from './EditorBox'
import CommentList from './CommentList'
import { Divider } from 'antd';

export default function Comment() {
  return (
    <div>
      <EditorBox title="发布留言"/>
      <Divider>108条留言</Divider>
      <CommentList/>
    </div>
  )
}
