/* 
	该文件是用于创建一个为Articles关于组件服务的action
*/

import {CHANGE_ARTICLE_PAGE} from '../constant'

export const changeArticlePage = data => ({type: CHANGE_ARTICLE_PAGE, data})