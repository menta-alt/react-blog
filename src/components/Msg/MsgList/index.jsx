// 该文件是留言显示区的组件
import React, { useEffect, useState } from 'react'
import MsgItem from './MsgItem'
import PubSub from 'pubsub-js' 
import {httpGet} from '@/utils/api/axios.js'
import './index.less'


export default function MsgList() {
  const [msgs, setMsgs] = useState([])
  const [replies, setReplies] = useState([])

  PubSub.subscribe('setMsgs', (method, msg) => {
    setMsgs([msg, ...msgs]) //顺序不要错了
  })
  PubSub.subscribe('setReplies', (method, reply) => {
    setReplies([...replies, reply])
  })

  useEffect(() => {
    httpGet('/messages').then(res => setMsgs(res))
    httpGet('/messages/replies').then(res => setReplies(res))
  }, [])

  return (
    <div>
      {/* 留言显示区 */}
      {
        msgs.map((msg) => {
          return (
            <div key={msg.id}>
              <MsgItem
                id={msg.id}
                msgId={msg.id}
                nickname={msg.nickname}
                email={msg.email}
                content={msg.content}
                date={msg.date}
                isReply={false}
              >
                {
                  replies
                    .filter((item) => item.msgId === msg.id)
                    .map((reply) => (
                      <MsgItem
                        key={reply.id}
                        id={reply.id}
                        msgId={msg.id}
                        nickname={reply.nickname}
                        email={reply.email}
                        content={reply.content}
                        date={reply.date}
                        isReply={true}
                        replyToWho={reply.replyToWho}
                      />
                    ))
                }
              </MsgItem>
            </div>
          )
        })
      }
    </div>
  )
}
