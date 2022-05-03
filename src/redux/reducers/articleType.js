/* 
	该文件是用于创建一个为Articles关于组件服务的reducer
*/
import {CHANGE_ARTICLE_TYPE} from '../constant'

const initState = 'recent' //对应最新发布文章

export default function hotArticlesReducer(preState=initState,action) {
  const {type, data} = action
  
	switch (type) {
		case CHANGE_ARTICLE_TYPE: 
			return data
		default:
			return preState
	}
}