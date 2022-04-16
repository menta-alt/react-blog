import React from 'react'
import SwitchCard from '@/components/SwitchCard'
import Markdown from '@/components/MarkDown'
import './index.less'

export default function AboutMe() {
  const content = `
    关于我😄
    -嘻嘻嘻
    -我爱你哦
    -呸呸呸
  `
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

          <div className='content'>
            <Markdown content={content || ''}/>
          </div>
        </div>
      </div>
    </div>
  )
}
