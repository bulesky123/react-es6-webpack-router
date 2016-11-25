/**
 * Created by zhoufei on 2016/11/24.
 */
import React from 'react'
export default class Circle extends React.Component{
    constructor(props) {
        super(props)
        this.state={

        }
    }
    drawCircle(data_arr, color_arr){
        let c=document.createElement('canvas');
        c.style.width='71px';
        c.style.height='71px';
        let ctx = c.getContext("2d");
        let radius = c.height / 2; //半径
        let ox = radius, oy = radius; //圆心
        let startAngle = 0; //起始弧度
        let endAngle = 0;   //结束弧度
        for (var i = 0; i < data_arr.length; i++) {
            //绘制饼图
            endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度
            ctx.fillStyle = color_arr[i];
            ctx.beginPath();
            ctx.moveTo(ox, oy); //移动到到圆心
            ctx.arc(ox, oy, radius, startAngle, endAngle, false);
            ctx.closePath();
            ctx.fill();
            startAngle = endAngle; //设置起始弧度
        }
        console.log(c);
        return c;
    }
    render() {
       return (
            <div>{this.drawCircle(this.props.data_arr,this.props.color_arr)}</div>
       )
    }
}