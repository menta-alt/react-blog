import React, { useRef, useState } from 'react'
import { Comment, Form, Button, List, Input } from 'antd'

import { MailOutlined, SmileOutlined } from '@ant-design/icons'
import './index.less'

const { TextArea } = Input

// 留言发布的编辑区
const Editor = ({onFinish, onFinishFailed, values, commentRef, title, isReply, setShowEditor }) => (
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
      isReply &&
      <Form.Item className='cancelBtn'>
        <Button size="large" onClick={() => setShowEditor(false)}>
          取消
        </Button>
      </Form.Item>
    }
  </Form>
);

export default function EditorBox({title, isReply, setShowEditor}) {
  const commentRef = useRef();
  const [infos, setInfos] = useState({
    comment:'',
    nickname:'',
    email: ''
  })

  // 处理发布和回复留言成功
  const onFinish = values => {
    setInfos(values)
    console.log(values);

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
            values={infos} 
            commentRef={commentRef} 
            title={title}
            isReply={isReply}
            setShowEditor={setShowEditor}
          />
        } 
      />
    </>
  )
}
