import React, {useEffect, useState} from 'react'
import SwitchCard from '@/components/SwitchCard'
import Markdown from '@/components/MarkDown'
import { httpGet } from '@/utils/api/axios.js'
import './index.less'

export default function AboutMe() {
  const [content,setContent] = useState('')
  
  useEffect(() => {
    httpGet('/aboutme').then(res => {
      setContent(res.content)
    })
  },[])

  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>关于我</h1>
      </div>
      
      {/* 主体内容 */}
      <div className="mainContent">
        <div className="aboutme">
          <SwitchCard/>

          <div className='contentHtml'>
            <Markdown content={content || ''}/>
          </div>
        </div>
      </div>
    </div>
  )
}
