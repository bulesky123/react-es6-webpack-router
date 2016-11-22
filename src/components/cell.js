/**
 * Created by zhoufei on 2016/11/22.
 */
import React from "react"
export default class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.stats={

        }
    }
    render() {
        return (
            <div className="moive">
                <ul>
                    {
                        this.props.list.map((item,i)=>
                            <li key={i} className="movie_item">
                                <div className="ui-flex-1 movie_head_l">
                                    {item.title}
                                </div>
                                <div className="ui-flex-right moive_head_r">更多</div>
                                <div className="scroll_pic">
                                    <ul>
                                        {
                                            item.arr.map((d,n)=>
                                                <li key={n}>
                                                    <a href=" ">
                                                        <div className="pic">
                                                            <img src={d.cover.url}/>
                                                            </div>
                                                            <h3>{d.title}</h3>
                                                        </a>
                                                    </li>
                                                )
                                            }
                                    </ul>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}