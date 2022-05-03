import React, {useEffect, useRef, useState} from 'react'
import { Input, Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import BlogItemCard from '@/components/BlogItemCard';
import Paging from '@/components/Paging/'
import { httpGet } from '@/utils/api/axios.js'
import './index.less'

const { Search } = Input

export default function SearchBlog() {
  const [originData, setOriginData] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const inputValue = useRef()

  useEffect(() => {
    inputValue.current.focus()

    httpGet('/articles').then(res => {
      setOriginData(res)
    })
  },[])

  // 输入框的回调
  const onSearch = value => {
    const newResult = originData.filter(item => item.title.includes(value))
    setSearchResult(newResult)
    setIsSearch(true)
  }

  // 重置输入框
  const clearInput = () => {
    inputValue.current.input.value = ''
  }

  return (
    <div>
      {/* 上方导语 */}
      <div className="intro">
        <h1>找文章</h1>
      </div>

      {/* 主体内容 */}
      <div className="mainContent">
        <div className="search">
          {/* 上方的输入框 */}
          <div className="top"> 
            {/* 搜索框 */}
            <Search 
              placeholder="请输入要搜索的文章关键词" 
              size="large"
              onSearch={onSearch}   
              allowClear={true}
              enterButton 
              style={{ width: 700, marginRight: 10 }}
              ref={inputValue}
            />

            {/* 显示全部按钮 */}
            <Button 
              type="primary" 
              size='large' 
              style={{ width: 150 }}
              onClick={clearInput}
            >显示全部文章</Button>
          </div>
          
          {/* 找到的文章 */}
          <div className='result'>
            {
              (isSearch ? searchResult : originData).map((item) => (
                <BlogItemCard 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  time={item.createTime}
                  viewCounts={item.viewCounts}
                />
              ))
            }
          </div>

        </div>
      </div>

      <Paging/>
    </div>
  )
}
