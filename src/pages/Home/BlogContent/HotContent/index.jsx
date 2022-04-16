import React from 'react'
import BlogItemCard from 'components/BlogItemCard'
import blogdata from '@/data/BlogData.js'
import Paging from 'components/Paging'
import './index.less'

export default function HotContent() {
  return (
    <div>
      <ul className='content'>
          {
            blogdata.map((item) => (
              <BlogItemCard 
                key={item.id}
                title={item.title}
                description={item.description}
                time={item.time}
                visitcount={item.visitcount}
              />
            ))
          }
      </ul>
      
      <Paging/>
    </div>
  )
}
