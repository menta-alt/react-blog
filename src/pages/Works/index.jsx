import React from 'react'
import { Card } from 'antd'
import WorksData from '@/data/WorksData'
import './index.less'

const { Meta } = Card
export default function Works() {
  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>作品集</h1>
      </div>

      {/* 主体内容 */}
      <div className="mainContent">
        <div className="works">
          {
            WorksData.map((item,index) => (
              <Card 
                className='workItem'
                hoverable 
                key={index}
                style={{ width: 280 }} 
                cover={<img alt="example" src={item.src} style={{height: '200px'}}/>}>
                <Meta title={item.title} description={item.description} />
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  )
}
