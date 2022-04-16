/*
  该文件是建站的时间进度日志组件
*/ 
import React from 'react'
import { Steps } from 'antd';
import ScheduleData from '@/data/ScheduleData.js'

const { Step } = Steps;

export default function Schedule() {
  return (
    <>
      <Steps progressDot direction="vertical">
        {
          ScheduleData.map((item, index) => (
            <Step
              key={index}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </Steps>
    </>
  )
}
