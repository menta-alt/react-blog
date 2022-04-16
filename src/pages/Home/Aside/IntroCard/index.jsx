import React from 'react'
import './index.less'
import { Avatar, Image } from 'antd'
import { GithubOutlined, CopyrightOutlined} from '@ant-design/icons'

export default function IntroCard() {
  return (
    <div className="introcard">
      {/* 头像 */}
      <div className='avatar'>
        <Avatar
          size={50}
          src={
            <Image
              src="https://joeschmoe.io/api/v1/random"
              style={{
                width: 48
              }}
            />
          }
        />
      </div>

      {/* 标语 */}
      <h3>欢迎来到 ELvira 的博客世界</h3>

      {/* 联系方式 */}
      <div className="contact">
        <a href="#"><GithubOutlined style={{ fontSize: '35px'}}/></a>
        <a href="#"><CopyrightOutlined style={{ fontSize: '35px'}}/></a>
      </div>
    </div>
  )
}
