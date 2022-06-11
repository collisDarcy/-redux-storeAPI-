import React, { Component } from 'react'
import store from '../redux/store'
export default class Count extends Component {
  // componentDidMount(){
  //   //检测redux中状态的变化，只要变化就调用render()----使用假更新，数据没动，但是render重新渲染
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  increment=()=>{
    const  {value}=this.selectNumber
    store.dispatch({type:'increment',data:value*1})
  }
  decrement=()=>{
    const  {value}=this.selectNumber
    store.dispatch({type:'decrement',data:value*1})
  }
  incrementIfOdd=()=>{
    const  {value}=this.selectNumber
    const count=store.getState()
    if(count%2!==0){
      store.dispatch({type:'increment',data:value*1})
    }

  }
  incrementAsync=()=>{
    const  {value}=this.selectNumber
   setTimeout(()=>{
    store.dispatch({type:'increment',data:value*1})
   },500)
  }
  render() {
    return (
      <div>
          {/* 获取store中state中的值---store.getState() */}
          <h1>当前的求和：{store.getState()}</h1>

          <select ref={(currentNode)=>{this.selectNumber=currentNode}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br/><br />
          <button onClick={this.increment}>加N</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>减N</button><br/><br />
          <button onClick={this.incrementIfOdd}>当前和为奇数再加N</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>异步加N</button>
      </div>
    )
  }
}
