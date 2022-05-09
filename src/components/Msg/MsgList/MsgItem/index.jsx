/**
 * 该文件是留言区和评论区的单个评论组件
 */
import React, { useState } from 'react'
import { Comment, Avatar } from 'antd';
import EditorBox from '../../EditorBox';
import moment from 'moment';
import './index.less'

export default function MsgItem({id, parentId, nickname, content, level, replyToWho, children}) {  //直接props解构
  const [showEditor, setShowEditor] = useState(false)

  const replyHandler = () => {
    setShowEditor(!showEditor)
  }

  return (
    <div>
      <Comment
        actions={[<span key="comment-nested-reply-to" onClick={replyHandler}>回复</span>]}
        author={ 
          level === 2 ? <span style={{color: "#192431"}}>{nickname} <span style={{color: "#7DAAFF"}}>@{replyToWho}</span></span> : nickname
        }
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={<p>{content}</p>}
        datetime={moment().format('YY-MM-DD hh:mm:ss')}
      >
        {children}
      </Comment>

      {
        showEditor && (
          <>
            <p className='replyTo'>回复给「{nickname}」:</p>
            <EditorBox
              title="回复"
              level={2}
              setShowEditor={setShowEditor}
              replyToWho={nickname}
              id={id}
              parentId={parentId}
            />
          </>

        )
      }
    </div>
  )
}
