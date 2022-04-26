import React, { useEffect, useState } from 'react'
import BlogItemCard from 'components/BlogItemCard'
import { httpPost } from '@/utils/api/axios'
import store from '@/redux/store.js'
import PubSub from 'pubsub-js'
import Paging from 'components/Paging'
import './index.less'

export default function RecentContent() {
  const [blogdata, setBlogData] = useState([])
  const [recentPage, setRecentPage] = useState(1)

  useEffect(() => {
    // 初始化加载第一页
    if (recentPage === 1) {
      httpPost('/articles/recent', { page: 1 }).then(res => setBlogData(res))
    }

    const unsubscribe = store.subscribe(() => {
      httpPost('/articles/recent', { page: store.getState().hotArticles }).then(res => setBlogData(res))
      setRecentPage(store.getState().hotArticles)
    })
    return () => {
      unsubscribe()
    }
  }, [recentPage])

  return (
    <div>
      <ul className="content">
        {blogdata.map(item => (
          <BlogItemCard key={item.id} title={item.title} description={item.description} time={item.createTime} viewCounts={item.viewCounts} />
        ))}
      </ul>

      <Paging total={13} />
    </div>
  )
}
