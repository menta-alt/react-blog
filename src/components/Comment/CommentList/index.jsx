// 该文件是留言显示区的组件
import React, { useRef, useState } from 'react'
import CommentItem from './CommentItem'
import msgs from '@/data/Msg.js'
import replies from '@/data/ReplyData.js'
import './index.less'


export default function PublishComment() {

  return (
    <div>
      {/* 留言显示区 */}
      {
        msgs.map((msg) => {
          return (
            <div key={msg.id}>
              <CommentItem
                id={msg.id}
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
                      <CommentItem
                        key={reply.id}
                        id={reply.id}
                        nickname={reply.nickname}
                        email={reply.email}
                        content={reply.content}
                        date={reply.date}
                        isReply={true}
                        replyToWho={reply.replyToWho}
                      />
                    ))
                }
              </CommentItem>
            </div>
          )
        })
      }
    </div>
  )
}
