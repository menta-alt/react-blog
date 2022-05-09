/**
 * 该文件是评论区和留言区发布言论的编辑器
 */
import React, { useRef, useState } from 'react'
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
      <Button htmlType="submit" loading={submitting} type="primary" size="large" >
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


export default function EditorBox({ title, level, articleId, parentId, setShowEditor, replyToWho}) {
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

    if(level === 1) { //发布评论
      httpPost('/comments/publish', {
        "articleId": articleId,
        "parentId": 0,
        "nickname": values.nickname,
        "email": values.email,
        "content": values.comment,
        "replyToWho": replyToWho,
        "level": 1
      }).then(comment => {
        setSubmitting(false)
        PubSub.publish("setComment", comment)
      })
    } else {  //回复评论
      console.log("articleId2", articleId);
      httpPost('/comments/publish', {
        "articleId": articleId,
        "parentId": parseInt(parentId),
        "nickname": values.nickname,
        "email": values.email,
        "content": values.comment,
        "replyToWho": replyToWho,
        "level": 2
      }).then(comment => {
        setShowEditor(false)
        setSubmitting(false)
        PubSub.publish("setComment", comment)
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
            title={title}
            submitting={submitting}
            values={infos} 
            commentRef={commentRef} 
            level={level}
            setShowEditor={setShowEditor}
          />
        } 
      />
    </>
  )
}
