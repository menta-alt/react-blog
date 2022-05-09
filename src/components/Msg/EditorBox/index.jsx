/**
 * 该文件是评论区和留言区发布言论的编辑器
 */
import React, { useEffect, useRef, useState } from 'react'
import { Comment, Form, Button, Input } from 'antd'
import { httpPost } from '@/utils/api/axios.js'
import PubSub from 'pubsub-js' 
import { MailOutlined, SmileOutlined } from '@ant-design/icons'
import './index.less'

const { TextArea } = Input

// 留言发布的编辑区
const Editor = ({title, onFinish, onFinishFailed, submitting, values, commentRef, level, setShowEditor }) => (
  <Form
    name="publishComment"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      name='comment'
      rules={[
        {
          required: true,
          message: '请输入留言！'
        }
      ]}
    >
      <TextArea 
        className='textContent' 
        showCount 
        maxLength={500} 
        rows={6} 
        value={values.comment}
        placeholder="快来聊聊天呀！" 
        ref={commentRef}
      />
    </Form.Item>
    <Form.Item
      className="nameInput" 
      name='nickname'
      rules={[
        {
          required: true,
          message: '请输入昵称！'
        }
      ]}
    >
      <Input size="large" placeholder="昵称" allowClear prefix={<SmileOutlined />} />
    </Form.Item>
    <Form.Item
      className="emailInput" 
      name='email'
      rules={[
        {
          required: true,
          message: '请输入邮箱！'
        }
      ]}
    >
      <Input size="large" placeholder="邮箱" allowClear prefix={<MailOutlined />} />
    </Form.Item>
    <Form.Item className='submitBtn'>
      <Button htmlType="submit" type="primary" size="large" >
        {title}
      </Button>
    </Form.Item>
    {
      (level === 2) &&
      <Form.Item className='cancelBtn'>
        <Button size="large" onClick={() => setShowEditor(false)}>
          取消
        </Button>
      </Form.Item>
    }
  </Form>
);

export default function EditorBox({title, level, parentId, setShowEditor, replyToWho}) {
  const commentRef = useRef();
  const [submitting, setSubmitting] = useState(false)

  const [infos, setInfos] = useState({
    comment:'',
    nickname:'',
    email: ''
  })


  // 处理发布或回复留言成功
  const onFinish = values => {
    setInfos(values)
    setSubmitting(true)
    
    if(level === 1) { //是留言
      httpPost('/messages/publish', {
        "parentId": 0,
        "nickname": values.nickname,
        "email": values.email,
        "content": values.comment,
        "replyToWho": replyToWho,
        "level": 1
      }).then(msg => {
        setSubmitting(false)
        PubSub.publish('setMsgs', msg)
      })
    } else { //是回复留言的评论
      httpPost('/messages/publish', {
        "parentId": parentId,
        "nickname": values.nickname,
        "email": values.email,
        "content": values.comment,
        "replyToWho": replyToWho,
        "level": 2
      }).then(reply => {
        setShowEditor(false)
        setSubmitting(false)
        PubSub.publish('setReplies', reply)
      })
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  
  return (
    <>
      {/* 发布留言区 */}
      <Comment 
        content={
          <Editor 
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed} 
            submitting={submitting}
            values={infos} 
            commentRef={commentRef} 
            title={title}
            level={level}
            setShowEditor={setShowEditor}
          />
        } 
      />
    </>
  )
}
