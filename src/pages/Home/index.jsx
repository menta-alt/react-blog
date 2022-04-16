import React from 'react'
import {Outlet} from 'react-router-dom'
import IntroCard from '../Home/Aside/IntroCard/index.jsx'
import TagCard from '../Home/Aside/TagCard/index.jsx'
import StatisticsCard from '../Home/Aside/StatisticsCard/index.jsx'
import SiteDataCard from '../Home/Aside/SiteDataCard/index.jsx'
import LeftNav from '../Home/LeftNav/index.jsx'
import './index.less'

export default function Home() {

  return (
    <div className='home'>
      {/* 上方导语 */}
      <div className='intro'>
        <h1>ELvira's Planent</h1>
        <h3>hasta la vista</h3>
      </div>

      {/* 主体内容 */}
      <div className='mainContent'>
        {/* 左侧标签 */}
        <div className='leftSider'>
          <LeftNav/>
        </div>

        {/* 主体博客内容 */}
        <div className='blog'>
          {/* 指定路由组件呈现的位置 */}
          <Outlet/>
        </div>

        {/* 右侧内容 */}
        <div className="rightSider">
          <IntroCard/>
          <StatisticsCard/>
          <SiteDataCard/>
          <TagCard/>
        </div>
      </div>
  
    </div>
  )
}
