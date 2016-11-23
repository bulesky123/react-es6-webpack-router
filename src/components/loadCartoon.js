/**
 * Created by zhoufei on 2016/11/23.
 */
import React from "react"
export default class LoadCartoon extends React.Component {
    constructor(props) {
        super(props)
        this.stats={

        }
    }
    render() {
        return (
            <div className={this.props.isHide+" loadBlock"}>
                <div className="loadBg" />
                <div className="loadCartoon"><div className="loadHead" />
                    <div className="loadBody" /><div className="loadDun" />
                    <div className="loadCappa" /></div>
                <p className="loadCon">加载中...</p>
                <div className="backcolor" />
            </div>
        )
    }
}