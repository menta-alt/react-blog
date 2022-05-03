/*
  该文件是建站的时间进度日志组件
*/ 
import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

export default function Schedule(props) {
  const { logs } = props

  return (
    <>
      <Steps progressDot direction="vertical">
        {
          logs.map((item) => (
            <Step
              key={item.id}
              title={item.createTime}
              description={item.description}
            />
          ))
        }
      </Steps>
    </>
  )
}
