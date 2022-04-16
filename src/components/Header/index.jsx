import React from 'react'
import { NavLink } from 'react-router-dom';
import { getNavList } from './config';
import store from '@/redux/store.js'
import {switchAbout} from '@/redux/actions/about.js'
import './index.less'


export default function Header() {
  const { navArr, articlesSecNavArr, aboutSecNavArr } = getNavList()

  const saveAbout = (path) => {
    return () => {
      const res = path === '/aboutme' ? true : false
      store.dispatch(switchAbout(res)) 
    }
  }
  
  return (
    <header>
      {/* logo和个人信息 */}
      <NavLink className='info' to='/home'>ELvira 的博客</NavLink>

      {/* 导航区 */}
      <div className='navArea'>

        {/* 文章 */}
        <div className='navItem acticleNav'>
          文章
          <div className='secNav articleSecNav'>
              {
                articlesSecNavArr.map((item, index) => (
                    <NavLink
                      className={({ isActive }) => isActive ? 'secActive' : 'secItem'}
                      to={item.to}
                      key={index}
                    >{item.name}</NavLink>
                ))
              }
          </div>
        </div>

        {/* 其他nav item */}
        {
          navArr.map((item, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'navActive' : 'navItem'
                }
                to={item.to}
                key={index}
              >{item.name}</NavLink>
          ))
        }

        {/* 关于 */}
        <div className='navItem aboutNav'>
          关于
          <div className='secNav aboutSecNav'>
            {
              aboutSecNavArr.map((item, index) => (
                  <NavLink
                    className={({ isActive }) => isActive ? 'secActive' : 'secItem'}
                    to={item.to}
                    key={index}
                    onClick={saveAbout(item.to)}
                  >{item.name}</NavLink>
              ))
            }
          </div>
        </div>
      </div>

      {/* 设置按钮 */}
      <div className='setting'>
        设置
      </div>
    </header>
  )
}
