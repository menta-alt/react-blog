import React from 'react'
import EditorBox from './EditorBox'
import MsgList from './MsgList'
import { Divider } from 'antd';

export default function Msg() {
  return (
    <div>
      <EditorBox title="发布留言"/>
      <Divider>108条留言</Divider>
      <MsgList/>
    </div>
  )
}
