import React, {useEffect, useState} from 'react'
import { useParams,useLocation } from "react-router-dom";
import Markdown from '@/components/MarkDown'
import { httpPost } from '@/utils/api/axios.js'
import { Tooltip, Tag, Divider, Button, Form, Avatar  } from 'antd';
import {EyeFilled, MessageFilled, MailOutlined, SmileOutlined} from '@ant-design/icons';
import MarkNav from 'markdown-navbar';
import Comment from '@/components/Comment/';
import PubSub from 'pubsub-js' 
import 'markdown-navbar/dist/navbar.css';
import './index.less'


export default function ArticleDetails() {
  const { id } = useParams()
  const { title, time, viewCounts, commentCounts } = useLocation().state || {}
  const [content,setContent] = useState('')
  const [tags, setTags] = useState([])
  const [isScroll, setIsScroll] = useState(false)
  const [commentCount, setCommentCount] = useState(0)

  PubSub.subscribe("commentCount", (method, commentCount) => setCommentCount(commentCount))

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

  PubSub.publish("sendArticleId", id)

  return (
    <div className='detailsContainer'>
      <div className="leftInfo">
        <Tooltip title="访问量" color='cyan' placement="topRight" className='count'>
          <EyeFilled className='icon'/>
          <p>{viewCounts}</p>
        </Tooltip>
        <Tooltip title="评论数" color='cyan' placement="bottomRight" className='count'>
          <MessageFilled className='icon'/>
          <p>{commentCount}</p>
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
        
        {/* 评论区 */}
        <Comment articleId={id}/>
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
