/*
  该文件用于开发分页的组件
*/
import React from 'react'
import store from '@/redux/store.js'
import { changeHotPage } from '@/redux/actions/hotArticles.js'
import { Pagination } from 'antd'
import './index.less'

export default function Paging(props) {
  const {total} = props
  
  const pagingHandler = (page, pagesize) => {
    store.dispatch(changeHotPage(page))
  }

  return (
    <>
      <Pagination 
        className='paging'
        total={total}
        defaultPageSize={10}
        showSizeChanger={false}
        showQuickJumper 
        showTotal={total => `总共 ${total} 条`} 
        hideOnSinglePage={true}
        onChange={pagingHandler}
      />
    </>
  )
}
