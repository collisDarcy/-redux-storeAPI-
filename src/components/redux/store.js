//该文件用于暴露一个store对象，整个应用只有一个store对象


// 引入createStore,专门用于创建redux中最为核心的store对象----异步action需要引入中间件--applyMiddleware
import { createStore, applyMiddleware } from 'redux'

//引入为count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk用于支持异步的action
import thunk from 'redux-thunk'
//暴露store

export default createStore(countReducer, applyMiddleware(thunk))