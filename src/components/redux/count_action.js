// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from './constant'
//同步action:返回的是object类型
export const createIncrementAction = data => ({ type: INCREMENT, data })//简写形式：箭头函数返回一个对象({})
export const createDecrementAction = data => ({ type: DECREMENT, data })
//异步action:返回的是function类型,异步的action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }

}