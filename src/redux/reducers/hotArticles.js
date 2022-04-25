/* 
	该文件是用于创建一个为Articles关于组件服务的reducer
*/
import {CHANGE_HOT_PAGE} from '../constant'

const initState = 1 

export default function hotArticlesReducer(preState=initState,action) {
  const {type, data} = action
  
	switch (type) {
		case CHANGE_HOT_PAGE: 
			return data
		default:
			return preState
	}
}