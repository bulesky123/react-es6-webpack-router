/**
 * Created by zhoufei on 2016/11/22.
 */
import React from 'react'
import $ from 'webpack-zepto'
import Mock from '../assets/mockCtrl/confirmeList'
import LoadCartoon from  '../components/loadCartoon.js'
export default class OrderConfirme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadIsHide:'',
            contentIsHide:'hide',
            "merchantName":"",
            "userMobile":"",
            "loanTotalAmount":"",
            "loanPeriod":"",
            "downPaymentAmount":"",
            "createTime":"",
            "displayOrderId":"",
            agreeClassName:''
        }
    }
    componentDidMount() {
        $.ajax({
            url:'/order/confirmeList',
            dataType:'json',
            success:function(data) {
                setTimeout(function(){
                    this.setState({
                        loadIsHide:'hide',
                        contentIsHide:'',
                        "merchantName":data.merchantName,
                        "userMobile":data.userMobile,
                        "loanTotalAmount":data.loanTotalAmount,
                        "loanPeriod":data.loanPeriod,
                        "downPaymentAmount":data.downPaymentAmount,
                        "createTime":data.createTime,
                        "displayOrderId":data.displayOrderId
                    });
                }.bind(this),1000)
            }.bind(this)
        });
    }
    handleSubmitClick() {
        this.setState({
            loadIsHide:'',
            agreeClassName:'active'
        })
        setTimeout(function(){
            location.hash='myOrderList'
        },1000)
    }
    handleAgreeCLick() {
        this.setState({
            agreeClassName:this.state.agreeClassName ? '' :'active'
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.contentIsHide}>
                    <div className="confirmeBox">
                        <h1>{this.state.merchantName}</h1>
                        <p><span>{this.state.userMobile}</span><span>分期用户：</span></p>
                        <p><span className="type"></span><span>交易类型：</span></p>
                        <p><span>{this.state.loanTotalAmount}</span><span>分期金额：</span></p>
                        <p><span>{this.state.loanPeriod}</span><span>分期期数：</span></p>
                        <p><span>{this.state.downPaymentAmount}</span><span>首付金额：</span></p>
                        <p><span>{this.state.createTime}</span><span>创建时间：</span></p>
                        <p><span>{this.state.displayOrderId}</span><span>订单编号：</span></p>
                    </div>
                    <div className="agreementBox">
                        <p><span onClick={this.handleAgreeCLick.bind(this)} className={this.state.agreeClassName+" agree"} agree="0"></span>同意<a href="/#index">《商户协议》</a></p>
                        <p>确认订单视为阅读并同意《商户协议》</p>
                    </div>
                    <div className="bottonBox">
                        <p className="comfireBtn" onClick={this.handleSubmitClick.bind(this)}>确认订单</p>
                    </div>
                </div>
                <LoadCartoon loadIsHide={this.state.loadIsHide} />
            </div>
        )
    }
}