/**
 * Created by zhoufei on 2016/11/25.
 */
import React from 'react'
export default class Order extends React.Component{
    constructor(props) {
        super(props)
        this.state={

        }
    }
    render() {
            return (
                <div className="orderBox">
                {
                  this.props.orderList.map((item,i)=>
                        <div className="item1">
                            <div className="itemTitle1">
                                <div>{item.stateName}</div>
                                <p>{item.createTime}</p>
                            </div>
                            <div className="itemContent1">
                                <div className="money">
                                    <p className="first">{item.loadMoney}</p>
                                    <p className="secound">分期金额(元)</p>
                                </div>
                                <div className="type">
                                    <p className="first">{item.type}</p>
                                    <p className="secound">交易类型</p>
                                </div>
                                <div className="number">
                                    <p className="first">{item.per}期</p>
                                    <p className="secound">分期期数</p>
                                </div>
                            </div>
                        </div>
                    )
                }
              </div>
        )
    }
}