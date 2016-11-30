/**
 * Created by zhoufei on 2016/11/22.
 */
import React from 'react'
import List from '../components/list'
let data=[
    {
        "ulContent": [
                {
                    "inputName":"姓名",
                    "placeholder":"请输入姓名",
                    "id":"name"
                },
                {
                     "inputName":"身份证号",
                     "placeholder":"请输入身份证号",
                    "id":"idCard"
                 }],
        "ulTitle":"实名认证"
    },
    {
        "ulContent": [
            {
                "inputName":"银行卡号",
                "placeholder":"请输入借记卡卡号",
                "id":"bankCard"
            },
            {
                "inputName":"预留手机号",
                "placeholder":"请输入手机号",
                "id":"phoneNumber"
            }],
        "ulTitle":"储蓄卡信息"
    }
];
export default class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleClick(e) {
        console.log(this)
    }
    render() {
        return (
            <div>
                <form id="surename" style={{"backgroundColor":"#F3F3F3"}}>
                    <List fromList={data} />
                </form>
                <div className="foot_button">
                    <p className="nextSubmit" onClick={this.handleClick.bind(this)}>下一步</p>
                </div>
          </div>
        )
    }
}
