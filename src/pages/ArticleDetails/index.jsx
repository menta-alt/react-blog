import React, {useEffect, useState} from 'react'
import { useParams,useLocation } from "react-router-dom";
import Markdown from '@/components/MarkDown'
import { httpPost } from '@/utils/api/axios.js'
import { Tooltip, Tag } from 'antd';
import {EyeFilled, MessageFilled} from '@ant-design/icons';
import './index.less'


export default function ArticleDetails() {
  const [content,setContent] = useState('')
  const [tags, setTags] = useState([])
  const { id } = useParams()
  const { title, time, viewCounts, commentCounts } = useLocation().state || {}

  useEffect(() => {
    httpPost(`/articles/details/${id}`).then( res => setContent(res.content) )
    httpPost('/tagsName', {"articleId": id}).then(res => setTags(res))
  },[])

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
        <Markdown content={content}/>
      </div>
      <div className='catalog'>

      </div>
    </div>
  )
}
