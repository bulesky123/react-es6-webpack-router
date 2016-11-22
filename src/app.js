'use strict';
import React from 'react'
import { render } from 'react-dom'
// 引入React-Router模块
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

//引入相应的css
require('./assets/css/reset.css');
require('./assets/css/common.css');

//引入相应的（每个页面对应的）js
import myIndex from './views/index.js';
import myMovie from './views/movie.js';
import myBook from './views/book.js';
import myNetwork from './views/network.js';
import myGroup from './views/group.js';

//配置导航
class Banner extends React.Component{
    constructor(props){
        super(props);
        this.stats={
            current:""
        }
    }

    render() {
        return (
            <div className="page">
                <header>
                    <div className="header_inner ui-bottom-line">
                        <div className="header_info ui-flex-justify-center">
                            <div className="header_left">
                                <Link to='/home'></Link>
                            </div>
                            <div className="header_right">
                                <Link to='/movie'>电影</Link>
                                <Link to='/book'>图书</Link>
                                <Link to='/network'>广播</Link>
                                <Link to='/group'>小组</Link>
                                <Link to='/home'></Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="components">
                    { this.props.children }
                </div>
            </div>
        )
    }
}
//配置router
render((
    <Router history={hashHistory} >
        <Route path="/" component={Banner}>
            <IndexRoute  component={myIndex} />
            <Route path="home" component={myIndex} />
            <Route path="movie" component={myMovie} />
            <Route path="book" component={myBook} />
            <Route path="network" component={myNetwork} />
            <Route path="group" component={myGroup} />
        </Route>
    </Router>
), document.getElementById('app'));

