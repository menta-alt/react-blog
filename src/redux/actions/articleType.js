/* 
	该文件是用于创建一个为Articles关于组件服务的action
*/

import {CHANGE_ARTICLE_TYPE} from '../constant'

export const changeArticleType = data => ({type: CHANGE_ARTICLE_TYPE, data})
