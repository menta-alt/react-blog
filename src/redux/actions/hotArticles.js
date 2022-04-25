/* 
	该文件是用于创建一个为Articles关于组件服务的action
*/

import {CHANGE_HOT_PAGE} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
export const changeHotPage = data => ({type: CHANGE_HOT_PAGE, data})
