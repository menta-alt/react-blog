import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Markdown from '@/components/MarkDown'
import { httpPost } from '@/utils/api/axios.js'
import {EyeFilled, MessageFilled} from '@ant-design/icons';
import './index.less'

export default function ArticleDetails() {
  const [content,setContent] = useState('')
  const { id } = useParams()

  useEffect(() => {
    httpPost(`/articles/details/${id}`).then(res => {
      setContent(res.contentHtml)
    })
  },[])

  return (
    <div className='detailsContainer'>
      <div className="leftInfo">
        <div className='count'>
          <EyeFilled className='icon'/>
          <p>200</p>
        </div>
        <div className='count'>
          <MessageFilled className='icon'/>
          <p>50000</p>
        </div>
      </div>
      
      <div className="details">
        <Markdown content={content || ''}/>
      </div>
      <div className='catalog'>

      </div>
    </div>
  )
}
