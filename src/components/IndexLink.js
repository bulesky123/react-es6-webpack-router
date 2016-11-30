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
    render() {
        return (
            <div className={this.props.contentIsHide+" content"}>
                <div className="headerBox">
                    <ul className="icon_list">
                        {
                            this.props.list.map((item,i)=>
                                <Link to={item.hash}>
                                    <li>
                                        <span href="javascript:void(0)"><img src={item.src} alt="sh_home_gl"/></span>
                                        <span href="javascript:void(0)" className="icon_name">{item.title}</span>
                                    </li>
                                </Link>
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