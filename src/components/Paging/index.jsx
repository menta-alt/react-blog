/*
  该文件用于开发分页的组件
*/
import React from 'react'
import { Pagination } from 'antd'
import './index.less'

export default function Paging() {
  return (
    <>
      <Pagination 
        className='paging'
        total={80} 
        defaultPageSize={10}
        showSizeChanger={false}
        showQuickJumper 
        showTotal={total => `总共 ${total} 条`} 
        hideOnSinglePage={true}
      />
    </>
  )
}
