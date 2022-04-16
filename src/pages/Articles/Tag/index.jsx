import React from 'react'
import './index.less'
import TagItem from '@/components/TagItem'

export default function Tag() {
  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>标签</h1>
      </div>

      {/* 主体内容 */}
      <div className="mainContent">
        <div className="tag">
          <TagItem/>
        </div>
      </div>
    </div>
  )
}
