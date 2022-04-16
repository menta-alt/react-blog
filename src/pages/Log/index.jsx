import React from 'react'
import './index.less'
import Schedule from '@/components/Schedule/'

export default function Log() {
  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>进度日志</h1>
      </div>

      <div className="mainContent">
        <div className="schedule">
          <Schedule/>
        </div>
      </div>
    </div>
  )
}
