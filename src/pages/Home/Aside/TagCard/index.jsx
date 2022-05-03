import React, { useEffect, useState, useRef } from 'react'
import TagItem from '@/components/TagItem'
import './index.less'

export default function TagCard() {
  const tagRef = useRef()
  const tagHeight = useRef(0) //保存tag卡片的高度
  const [needFixed, setFixed] = useState(null)

  // 处理tagCard是否固定
  useEffect(() => { //相当于componentDidMount()钩子
    const fixedTagTop = tagRef.current.offsetTop  //第一次为0

    window.onscroll = () => {
      // if(!fixedTagTop || window.scrollY < tagHeight.current || window.scrollY > 1500) {
      if(!fixedTagTop || window.scrollY < tagHeight.current) {
        setFixed(false)
      } else {
        if(fixedTagTop > tagHeight.current)  tagHeight.current = fixedTagTop
        let isFixed = window.scrollY >= fixedTagTop
        setFixed(isFixed)
      }
    }

  },[needFixed])  

  return (
    <div className={`tagCard ${needFixed ? 'fixedTagCard' : ''}`} ref={tagRef}>
      <TagItem />
    </div>
  )
}

