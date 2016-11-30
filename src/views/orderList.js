/**
 * Created by zhoufei on 2016/11/22.
 */

import React from 'react'
import {Link} from 'react-router'
import Order from '../components/order'
import Mock from '../assets/mockCtrl/orderList'
import $ from 'webpack-zepto'
import LoadCartoon from  '../components/loadCartoon.js'
export default class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadIsHide:'',
            contentIsHide:'hide',
            orderList:[],
            selected:false
        }
    }
    componentDidMount() {
        $.ajax({
                url:'order/orderList',
                dataType:'json',
                success:function(data){
                    setTimeout(function(){
                        this.setState({
                        loadIsHide:'hide',
                        contentIsHide:'',
                        orderList:data.content.orderList
                    });
                }.bind(this),1000)
    }.bind(this)
        })
    }
    handleClick() {
        $.ajax({
            url:'order/orderList',
            dataType:'json',
            success:function(data){
                this.setState({
                    orderList:data.content.orderList,
                    selected:!this.state.selected
                })
            }.bind(this)
        });
    }
    render() {
        return (
            <div url="order/orderList">
                <header>
                    <span onClick={this.handleClick.bind(this)} className={(this.state.selected ? "selected " : "") +"tab right js_section"}>待结算订单</span>
                    <span onClick={this.handleClick.bind(this)} className={(this.state.selected ? "" : "selected ") +" tab js_all"}>全部</span>
                </header>
                <Order orderList={this.state.orderList} />
                <LoadCartoon loadIsHide={this.state.loadIsHide} />
            </div>
        );
    }
}
