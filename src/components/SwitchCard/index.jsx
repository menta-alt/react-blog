import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import store from '@/redux/store.js'
import {switchAbout} from '@/redux/actions/about.js'
import { Switch } from 'antd';
import './index.less'


export default function SwitchCard() {
  const navigate = useNavigate()
  const switchRef = useRef()
  const [aboutme, setAboutMe] = useState(store.getState().about)
  // console.log('aboutme:',aboutme);

  useEffect(() => {
    // if(aboutme) { //关于我
    //   navigate('/aboutme')
    // } else {
    //   navigate('/aboutsite')
    // }

    const unsubscribe = store.subscribe(() => {
      // console.log('redux:',store.getState().about);
      setAboutMe()
    })
    return () => {
      unsubscribe()
    }
  },[aboutme])

  // switch的回调函数
  function onChange(checked) {
    store.dispatch(switchAbout(checked)) 
    if(checked) {
      navigate('/aboutme')
    } else {
      navigate('/aboutsite')
    }
    // console.log(`switch to ${checked}`);
  }

  return (
    <div className='switchCard'>
      <span className={aboutme ? '' : 'activeAbout'}>关于站点</span>
      <Switch className='switchBtn' checked={aboutme} onChange={onChange} ref={switchRef}/>
      <span className={aboutme ? 'activeAbout' : ''}>关于我</span>
    </div>
  )
}
