import React, { useState } from 'react'
import EditorBox from './EditorBox'
import MsgList from './MsgList'
import PubSub from 'pubsub-js'
import { Divider } from 'antd';

export default function Msg() {
  const [msgCount, setMsgCount] = useState(0)

  PubSub.subscribe('msgCount', (method, count) => setMsgCount(count))
  
  return (
    <div>
      <EditorBox level={1} title="发布留言"/>
      <Divider>{msgCount}条留言</Divider>
      <MsgList/>
    </div>
  )
}
