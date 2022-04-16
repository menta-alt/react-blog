/* 
	该文件是用于创建一个为About关于组件服务的action
*/

import {SWITCH_ABOUT} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
export const switchAbout = data => ({type: SWITCH_ABOUT, data})