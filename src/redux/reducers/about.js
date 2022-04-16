/* 
	该文件是用于创建一个为About关于组件服务的reducer
*/
import {SWITCH_ABOUT} from '../constant'

const initState = false //初始化状态，false对应的就是关于站点版块

export default function aboutReducer(preState=initState,action) {
  //从action对象中获取：type、data
  const {type, data} = action
  
	switch (type) {
		case SWITCH_ABOUT: 
			return data
		default:
			return preState
	}
}