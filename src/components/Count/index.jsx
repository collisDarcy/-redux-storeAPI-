import React, { Component } from 'react'
// 引入store ,用于获取redux中保持状态
// import store from '../redux/store'
// 引入actionCreator专门用于创建action对象
// import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/count_action'
export default class Count extends Component {
  // componentDidMount(){
  //   //检测redux中状态的变化，只要变化就调用render()----使用假更新，数据没动，但是render重新渲染
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }

  increment = () => {
    // console.log(this.props)
    const { value } = this.selectNumber
    this.props.jia(value * 1)
    // store.dispatch(createIncrementAction(value*1))
    // store.dispatch({type:'increment',data:value*1})
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
    // store.dispatch(createDecrementAction(value*1))
    // store.dispatch({type:'decrement',data:value*1})
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
    // const count=store.getState()
    // if(count%2!==0){
    //   // store.dispatch(createIncrementAction(value*1))
    //   // store.dispatch({type:'increment',data:value*1})
    // }

  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
    // store.dispatch(createIncrementAsyncAction(value*1,500))
    //  setTimeout(()=>{
    //   store.dispatch(createIncrementAction(value*1))
    //   // store.dispatch({type:'increment',data:value*1})
    //  },500)
  }
  render() {
    return (
      <div>
        {/* 获取store中state中的值---store.getState() */}
        <h1>当前的求和：{this.props.count}</h1>

        <select ref={(currentNode) => { this.selectNumber = currentNode }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br /><br />
        <button onClick={this.increment}>加N</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>减N</button><br /><br />
        <button onClick={this.incrementIfOdd}>当前和为奇数再加N</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加N</button>
      </div>
    )
  }
}
