import React from 'react'
import SwitchCard from '@/components/SwitchCard'
import './index.less'

export default function AboutSite() {
  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>关于站点</h1>
      </div>

      {/* 主体内容 */}
      <div className="mainContent">
        <div className="aboutme">
          <SwitchCard />

          <div className="content">
            关于站点
          </div>
        </div>
      </div>
    </div>
  )
}
