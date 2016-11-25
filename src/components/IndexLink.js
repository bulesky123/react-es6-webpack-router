/**
 * Created by zhoufei on 2016/11/22.
 */
import React from "react"
import { Link } from 'react-router'
export default class IndexLink extends React.Component {
    constructor(props) {
        super(props)
        this.stats={

        }
    }
    handleClick(hash) {
        location.hash=hash
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
    }
    render() {
        return (
            <div className={this.props.contentIsHide+" content"}>
                <div className="headerBox">
                    <ul className="icon_list">
                        {
                            this.props.list.map((item,i)=>
                                <li onClick={this.handleClick.bind(this,item.hash)}>
                                    <a href="javascript:void(0)"><img src={item.src} alt="sh_home_gl"/></a>
                                    <a href="javascript:void(0)" className="icon_name">{item.title}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="contentBox">
                    {
                        this.props.listDetail.map((item,i)=>
                        <div className="item">
                            <div className="itemTitle">
                                <p className="right"><span className="timeIcon"></span><i>{item.nowTime}</i></p>
                                <p><span className={ item.icon }></span>{item.iconTitle}</p>
                            </div>
                            <div className="itemContent">
                                <div>
                                    <div className="canvasBox">
                                        <canvas id={i} width="71" height="71" onLoad={this.drawCircle(item.data_arr, item.color_arr)}></canvas>
                                    </div>
                                    <div className="canvasIcon">
                                        <p><span></span><i>{item.sh_percent}</i><span></span><i>{item.xj_percent}</i></p>
                                    </div>
                                </div>
                                <div>
                                    <p><span className="spanIcon"></span>商品贷款</p>
                                    <p><span>￥</span><span><i>{item.sh_money}</i></span></p>
                                    <p><span className="spanIcon spanIcon1"></span>现金贷款</p>
                                    <p><span>￥</span><span><i>{item.xj_money}</i></span></p>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                <div className="footer" id="footer">
                    <ul className="footerList">
                        <li  className="post"><div className="footer_icon index_icon"></div><p className="color_footer font12">首页</p></li>
                        <li><div className="footer_icon my_icon"></div><p className="color_footer font12">我的</p></li>
                    </ul>
                </div>
                <div className="ftBlank js_ftBlank"></div>
            </div>
        )
    }
}