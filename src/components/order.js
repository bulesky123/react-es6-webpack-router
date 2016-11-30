/**
 * Created by zhoufei on 2016/11/25.
 */
import React from 'react'
import {Link} from 'react-router'
export default class Order extends React.Component{
    constructor(props) {
        super(props)
        this.state={

        }
    }
    handleClick(orderGid) {
        location.hash="orderDetail/"+orderGid;
    }
    render() {
            return (
                <div className="orderBox">
                {
                  this.props.orderList.map((item,i)=>
                  <Link to={`/MyorderDetail/${item.orderGid}`}>
                        <div className="item1">
                            <div className="itemTitle1">
                                <div>{item.stateName==1 ? "待结算" : "已结算"}</div>
                                <p>{item.createTime}</p>
                            </div>
                            <div className="itemContent1">
                                <div className="money">
                                    <p className="first">{item.loadMoney}</p>
                                    <p className="secound">分期金额(元)</p>
                                </div>
                                <div className="type">
                                    <p className="first">{item.type==1? "商品贷" : "现金贷"}</p>
                                    <p className="secound">交易类型</p>
                                </div>
                                <div className="number">
                                    <p className="first">{item.per}期</p>
                                    <p className="secound">分期期数</p>
                                </div>
                            </div>
                        </div>
                  </Link>
                    )
                }
              </div>
        )
    }
}