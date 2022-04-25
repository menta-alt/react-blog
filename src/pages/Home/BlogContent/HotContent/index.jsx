import React, { useEffect, useState } from 'react'
import BlogItemCard from 'components/BlogItemCard'
import { httpPost } from '@/utils/api/axios'
import store from '@/redux/store.js'
import PubSub from 'pubsub-js'
import Paging from 'components/Paging'
import './index.less'

export default function HotContent() {
  const [blogdata, setBlogData] = useState([])
  const [hotPage, setHotPage] = useState(1)

  useEffect(() => {
    // 初始化加载第一页
    if(hotPage === 1) {
      httpPost('/articles/hot', { "page": 1 }).then(res => setBlogData(res))
    }

    const unsubscribe = store.subscribe(() => {
      httpPost('/articles/hot', { "page": store.getState().hotArticles }).then(res => setBlogData(res))
      setHotPage(store.getState().hotArticles)
    })
    return () => {
      unsubscribe()
    }
  },[hotPage])

  PubSub.publish('test', blogdata.length)
  
  return (
    <div>
      <ul className='content'>
        {
          blogdata.map((item) => (
            <BlogItemCard 
              key={item.id}
              title={item.title}
              description={item.description}
              time={item.createTime}
              viewCounts={item.viewCounts}
            />
          ))
        }
      </ul>
      
      <Paging total={13}/>
    </div>
  )
}
