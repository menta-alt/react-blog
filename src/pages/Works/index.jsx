import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import WorksData from '@/data/WorksData'
import { httpGet } from '@/utils/api/axios.js'
import './index.less'

const { Meta } = Card

export default function Works() {
  const [worksData, setWorkData] = useState([]) 

  useEffect(() => {
    httpGet('/works').then(res => setWorkData(res))
  },[])
  
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
            worksData.map((item) => (
              <Card 
                className='workItem'
                hoverable 
                key={item.id}
                style={{ width: 280 }} 
                cover={<img alt="example" src={item.cover} style={{height: '200px'}}/>}>
                <Meta title={item.title} description={item.url} />
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  )
}
