import { Tag } from 'antd';
import React from 'react'
import TagData from '@/data/TagData.js'
import './index.less'

export default function TagItem() {
  return (
    <>
      {
        TagData.map((name,index) => (
          <Tag color="blue" key={index}>{name}</Tag>
        ))
      }
    </>
  )
}
