import React, {useRef} from 'react'
import { Input, Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import BlogItemCard from '@/components/BlogItemCard';
import Paging from '@/components/Paging/'
import SearchResult from '@/data/SearchResult.js'

import './index.less'


export default function Search() {
  const { Search } = Input;
  const inputValue = useRef()

  // 输入框的回调
  const onSearch = value => {
    console.log('value:',value);
  }

  // 重置输入框
  const clearInput = () => inputValue.current.input.value = ''

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
              enterButton 
              style={{ width: 800, marginRight: 10 }}
              ref={inputValue}
            />

            {/* 重置按钮 */}
            <Button 
              type="primary" 
              icon={<RedoOutlined />} 
              size='large' 
              style={{ width: 48 }}
              onClick={clearInput}
            />
          </div>
          
          {/* 找到的文章 */}
          <div className='result'>
            {
              SearchResult.map((item) => (
                <BlogItemCard 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                  visitcount={item.visitcount}
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
