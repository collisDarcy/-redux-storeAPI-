//该组件----------------------容器组件
//引入Count的UI组件
import CountUI from "../../components/Count";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../components/redux/count_action'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//connect()接收两个参数，都是函数
//第一个参数：redux中所保存的状态
//第二个参数：用于操作状态的方法
// mapStateToProps函数返回的对象中的key作为传递给UI组件props的key,value就作为传递给UI组件props的value
//不用再引入store,原因是已经在App中传递了store
function mapStateToProps(state) {
  return { count: state }
}
//  mapDispatchToProps函数返回的对象中的key作为传递给UI组件props的key,value就作为传递给UI组件props的value
function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => { dispatch(createIncrementAction(data)) },
    jian: (data) => { dispatch(createDecrementAction(data)) },
    jiaAsync: (data, time) => { dispatch(createIncrementAsyncAction(data, time)) }

  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)