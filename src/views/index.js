/**
 * Created by zhoufei on 2016/11/22.
 */
import React from 'react'
import IndexLink from '../components/IndexLink.js';
import LoadCartoon from  '../components/loadCartoon.js'
import $ from 'webpack-zepto'
import Mock from '../assets/mockCtrl/indexList'
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            listDetail:[],
            isHide:''
        }
    }
    componentDidMount() {
        $.ajax({
            url:'index/indexList',
            dataType:'json',
            success:function(data) {
                this.setState({
                    list:data.content.list,
                    listDetail:data.content.listDetail,
                    isHide:'hide'
                });
            }.bind(this)
        });
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div isHide={this.state.isHide}>
                <IndexLink list={this.state.list} listDetail={this.state.listDetail} />
                <LoadCartoon />
            </div>
        )
    }
}