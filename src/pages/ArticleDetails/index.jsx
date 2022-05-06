import React, {useEffect, useState} from 'react'
import { useParams,useLocation } from "react-router-dom";
import Markdown from '@/components/MarkDown'
import { httpPost } from '@/utils/api/axios.js'
import { Tooltip, Tag, Input,Divider, Button, Form, Comment, Avatar  } from 'antd';
import {EyeFilled, MessageFilled, MailOutlined, SmileOutlined} from '@ant-design/icons';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './index.less'

const { TextArea } = Input;

export default function ArticleDetails() {
  const [content,setContent] = useState('')
  const [tags, setTags] = useState([])
  const { id } = useParams()
  const { title, time, viewCounts, commentCounts } = useLocation().state || {}
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    httpPost(`/articles/details/${id}`).then( res => setContent(res.content) )
    httpPost('/tagsName', {"articleId": id}).then(res => setTags(res))

    window.onscroll = () => {
      if(window.scrollY > 20) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
  },[])

  const publishComment = () => {

  }

  const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      }
    >
      {children}
    </Comment>
  );

  return (
    <div className='detailsContainer'>
      <div className="leftInfo">
        <Tooltip title="访问量" color='cyan' placement="topRight" className='count'>
          <EyeFilled className='icon'/>
          <p>{viewCounts}</p>
        </Tooltip>
        <Tooltip title="评论数" color='cyan' placement="bottomRight" className='count'>
          <MessageFilled className='icon'/>
          <p>{commentCounts}</p>
        </Tooltip>
      </div>
      
      <div className="details">
        <div className="articleInfo">
          <span className='author'>作者: ELvira</span>
          <span className='time'>发布时间：{time}</span>
          <span className="tags">
            <span>标签：</span>
            {
              tags.map((item, index) => (
                <Tag className='tag' key={index} color="cyan">{item}</Tag>
              ))
            }
          </span>
        </div>

        <h1 className='title'>{title}</h1>
        {/* 博客正文 */}
        <Markdown content={content}/>

        {/* 分割线 */}
        <Divider className='line'>End</Divider>
        <Divider orientation="left" className='commentLine'>评论</Divider>

        {/* 显示留言区 */}
        <div className="commentArea">
          <ExampleComment>
            <ExampleComment />
            <ExampleComment />
          </ExampleComment>
        </div>

        {/* 发布评论区 */}
        <div className="commentPublish">
          <Form>
            <TextArea showCount maxLength={500} rows={6} placeholder="快来和我聊聊天呀！" />
            <Input className='nameInput' size="large" placeholder="昵称" allowClear 
                  prefix={<SmileOutlined />} />
            <Input className='emailInput' size="large" placeholder="邮箱" allowClear 
                  prefix={<MailOutlined />} />
            <Button type="primary" size="large" onClick={publishComment}>发布评论</Button>
          </Form>
        </div>


      </div>

      <div className={`catalog ${ isScroll ? 'navTopChange' : ''}`}>
        <p className='menu'>目录</p>
        <MarkNav
          className="article-menu"
          source={content}
          headingTopOffset={80}
          ordered={false}	 //不要数字信号
        />
      </div>
    </div>
  )
}
