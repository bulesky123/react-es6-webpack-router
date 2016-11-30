'use strict';
import React from 'react'
import { render } from 'react-dom'
// 引入React-Router模块
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

//引入相应的css
require('./assets/css/reset.css');
require('./assets/css/common.css');

//引入相应的（每个页面对应的）js
import myIndex from './views/index';
import myCode from './views/myCode';
import myOrderConfirme from './views/orderConfirme';
import myOrderList from './views/orderList';
import mySurname from './views/surname';
import MyorderDetail from './views/myorderDetail'
// 配置导航
class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: ''
        }
    }
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}
//配置router
render((
    <Router history={hashHistory} >
        <Route path="/" component={Banner}>
            <IndexRoute  component={myIndex} />
            <Route path="index"  component={myIndex} />
            <Route path="myCode"  component={myCode} />
            <Route path="myOrderConfirme"  component={myOrderConfirme} />
            <Route path="myOrderList"  component={myOrderList} />
            <Route path="mySurname"  component={mySurname} />
            <Route path="/MyorderDetail/:orderGid" component={MyorderDetail}/>
        </Route>
    </Router>
), document.getElementById('app'));

