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
            loadIsHide:'',
            contentIsHide:'hide'
        }
    }
    componentDidMount() {
        $.ajax({
            url:'index/indexList',
            dataType:'json',
            success:function(data) {
                setTimeout(function(){
                    this.setState({
                        list:data.content.list,
                        listDetail:data.content.listDetail,
                        loadIsHide:'hide',
                        contentIsHide:''
                    })
                }.bind(this),1000)
            }.bind(this)
        });
    }
    render() {
        return (
            <div>
                <IndexLink contentIsHide={this.state.contentIsHide} list={this.state.list} listDetail={this.state.listDetail} />
                <LoadCartoon loadIsHide={this.state.loadIsHide} />
            </div>
        )
    }
}