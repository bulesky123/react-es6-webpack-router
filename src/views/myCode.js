/**
 * Created by zhoufei on 2016/11/22.
 */
import React from "react"
export default class Cmount extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enable:false
        }
    }
    handleClick(){
        this.setState({
            enable:!this.state.enable
        })
    }
    componentWillMount() {
        console.log("渲染前");
        this.timer=setInterval(()=>console.log("不断打印总"),500);
    }
    render(){
        console.log("渲染中");
        return (
            <div className="lifeCycle">
                <h3>React的生命周期</h3>
                <ul>
                    <p>一、渲染期</p>
                    <li>1、componentWillMount 在render 前：相当于初始化，在render渲染动作执行前要干的事</li>
                    <li>2、componentDidMound  在render渲染后马上执行的（最后一次修改state）在render渲染动作执行后马上要干的事</li>
                    <li>3、componentWillUnmount 销毁期：在组件从页面dom中移除时要干的事</li>
                    <p>二、存在期</p>
                    <li>1、componentWillUpdate 更新前，也就是state改变后从新更新</li>
                    <li>2、componentDidUpdate  更新后 </li>
                </ul>
                <div>
                    <input type="text" className={this.state.enable ? "bgColor" : ""} disabled={this.state.enable} />
                    <button onClick={this.handleClick.bind(this)}>改变state</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("渲染后")
    }
    componentWillUpdate(){
        console.log("更新前")
    }
    componentDidUpdate(){
        console.log("更新后")
    }
    componentWillUnmount(){
        console.log("销毁啦");
        alert("我销毁啦。。。");
        clearInterval(this.timer);
    }
}