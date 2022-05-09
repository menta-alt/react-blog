// 该文件是留言显示区的组件
import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import PubSub from 'pubsub-js' 
import {httpPost} from '@/utils/api/axios.js'
import './index.less'


export default function CommentList() {
  const [commentsLevelOne, setCommentsLevelOne] = useState([])
  const [commentsLevelTwo, setCommentsLevelTwo] = useState([])
  const [articleId, setArticleId] = useState(-1)
  const [commentCount, setCommentCount] = useState(0)
  const [isFirst, setIsFirst] = useState(true)

  useEffect(() => {
    if(isFirst) {
      httpPost('/comments', {
        "level": 1, 
        "articleId": articleId
      }).then(res => {
        setCommentsLevelOne(res)
        setIsFirst(false)
      })
      httpPost('/comments', { 
        "level": 2,
        "articleId": articleId
      }).then(res => setCommentsLevelTwo(res))
    }

    PubSub.subscribe('sendArticleId', (method, id) => setArticleId(id))
    PubSub.subscribe('setComment', (method, comment) => {
      if(comment.level === 1) {
        setCommentsLevelOne([comment, ...commentsLevelOne])
      } else {
        setCommentsLevelTwo([...commentsLevelTwo, comment])
      }
    })
    PubSub.publish('commentCount', commentCount)

    setCommentCount(commentsLevelOne.length + commentsLevelTwo.length)
    
  }, [isFirst, articleId, commentCount, commentsLevelOne, commentsLevelTwo])


  return (
    <div>
      {/* 留言显示区 */}
      { 
        commentsLevelOne.map((parent) => {
          return (
            <div key={parent.id}>
              <CommentItem
                id={parent.id}
                articleId={articleId}
                parentId={parent.id}
                nickname={parent.nickname}
                email={parent.email}
                content={parent.content}
                level={1}
              >
                {
                  commentsLevelTwo
                    .filter((item) => item.parentId === parent.id)
                    .map((child) => (
                      <CommentItem
                        key={child.id}
                        id={child.id}
                        articleId={articleId}
                        parentId={parent.id}
                        nickname={child.nickname}
                        email={child.email}
                        content={child.content}
                        replyToWho={child.replyToWho}
                        level={2}
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
