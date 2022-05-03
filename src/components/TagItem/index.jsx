import { Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import { httpGet } from '@/utils/api/axios.js'
import './index.less'

export default function TagItem() {
  const [tags, setTags] = useState([])  //初始化里面不要空着，要写个[]

  useEffect(() => {
    httpGet('/tags').then(res => {
      setTags(res)
    })
  },[])

  return (
    <>
      {
        tags.map((item) => (
          <Tag className='tag' color="blue" key={item.id}>{item.tagName}</Tag>
        ))
      }
    </>
  )
}
