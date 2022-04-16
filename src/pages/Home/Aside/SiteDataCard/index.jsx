import React from 'react'

import './index.less'

export default function SiteDataCard() {

  return (
    <div className='sitedataCard' >
      <div className='carditem'>
        <span className='left'>总访问量：</span>
        <span className='right'>123天</span>
      </div>
      <div className='carditem'>
        <span className='left'>已正常运行：</span>
        <span className='right'>456天</span>
      </div>
    </div>
  )
}
