// 该文件是留言显示区的组件
import React, { useEffect, useState } from 'react'
import MsgItem from './MsgItem'
import PubSub from 'pubsub-js' 
import {httpPost} from '@/utils/api/axios.js'
import './index.less'


export default function MsgList() {
  const [isFirst, setIsFirst] = useState(true)
  const [msgsLevelOne, setMsgsLevelOne] = useState([])
  const [msgsLevelTwo, setMsgsLevelTwo] = useState([])
  const [msgCount, setMsgCount] = useState(0)

  useEffect(() => {
    if(isFirst) {
      httpPost('/messages', { "level": 1 }).then(res => {
        setIsFirst(false)
        setMsgsLevelOne(res)
      })
      httpPost('/messages', { "level": 2 }).then(res => setMsgsLevelTwo(res))
    }
    
    PubSub.subscribe('setMsgs', (method, msg) => {
      setMsgsLevelOne([msg, ...msgsLevelOne]) //顺序不要错了
    })
    PubSub.subscribe('setReplies', (method, reply) => {
      setMsgsLevelTwo([...msgsLevelTwo, reply])
    })
    PubSub.publish('msgCount', msgCount)

    setMsgCount(msgsLevelOne.length + msgsLevelTwo.length)

  }, [isFirst, msgCount, msgsLevelOne, msgsLevelTwo])
  

  return (
    <div>
      {/* 留言显示区 */}
      {
        msgsLevelOne.map((msg) => {
          return (
            <div key={msg.id}>
              <MsgItem
                id={msg.id}
                parentId={msg.id}
                nickname={msg.nickname}
                email={msg.email}
                content={msg.content}
                level={1}
              >
                {
                  //因为用的全等，要注意parentId和id的类型
                  msgsLevelTwo
                    .filter((item) => item.parentId === msg.id) 
                    .map((reply) => (
                      <MsgItem
                        key={reply.id}
                        id={reply.id}
                        parentId={msg.id}
                        nickname={reply.nickname}
                        email={reply.email}
                        content={reply.content}
                        replyToWho={reply.replyToWho}
                        level={2}
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
