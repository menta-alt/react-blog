import React from 'react'
import ClassItem from '@/components/ClassItem'
import './index.less'
import ClassesData from '@/data/ClassesData.js'

export default function Classes() {

  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>分类</h1>
      </div>

      {/* 主体内容 */}
      <div className="mainContent">
        <div className="classes">
          <ul className='content'>
            {
              ClassesData.map((item) => (
                <ClassItem
                  key={item.id}
                  title={item.title}
                  count={item.count}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
