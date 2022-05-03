import React, { useEffect, useState } from 'react'
import { httpGet } from '@/utils/api/axios.js'
import './index.less'
import Schedule from '@/components/Schedule/'

export default function Log() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    httpGet('/logs').then(res => {
      setLogs(res)
    })
  },[])

  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>进度日志</h1>
      </div>

      <div className="mainContent">
        <div className="schedule">
          <Schedule logs={logs}/>
        </div>
      </div>
    </div>
  )
}
