/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
import {combineReducers} from 'redux'

import about from './about'

//汇总所有的reducer变为一个总的reducer
export default  combineReducers({
  about
})