import React, { useEffect, useState } from 'react'
import BlogItemCard from 'components/BlogItemCard'
import { httpPost, httpGet } from '@/utils/api/axios'
import store from '@/redux/store.js'
import PubSub from 'pubsub-js'
import Paging from 'components/Paging'
import './index.less'

export default function BlogContent() {
  const [blogdata, setBlogData] = useState([])
  const [articlePage, setArticlePage] = useState(1)
  const [total, setTotal] = useState(1)
  const [acticleType] = useState(store.getState().articleType)

  useEffect(() => {
    // 初始化加载第一页
    if(articlePage === 1) {
      httpPost(`/articles/${acticleType}`, { "page": 1 }).then(res => setBlogData(res))
      httpGet('/articles').then(res => setTotal(res.length))
    }

    const unsubscribe = store.subscribe(() => {
      httpPost(`/articles/${acticleType}`, { "page": store.getState().articlePage }).then(res => {
        setBlogData(res)
      })
      setArticlePage(store.getState().articlePage)
    })
    return () => {
      unsubscribe()
    }
  },[articlePage, acticleType])

  PubSub.publish('articleCount', total)
  
  return (
    <div>
      <ul className='content'>
        {
          blogdata.map((item) => (
            <BlogItemCard 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              time={item.createTime}
              viewCounts={item.viewCounts}
              commentCounts={item.commentCounts}
            />
          ))
        }
      </ul>
      
      <Paging total={total}/>
    </div>
  )
}
