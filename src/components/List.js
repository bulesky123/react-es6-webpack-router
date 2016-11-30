/**
 * Created by zhoufei on 2016/11/30.
 */
import React from 'react'
export default class List extends React.Component{
    constructor(props) {
        super(props)
        this.stats = {}
    }
    handleChange(id) {
        console.log(this.refs.id)
    }
    render(){
        return (
            <div>
                {
                    this.props.fromList.map((items,i)=>
                    <div>
                        <h3 className="title">{items.ulTitle}</h3>
                        <ul className="zz-list">
                            {
                                items.ulContent.map((item,i)=>
                                <li>
                                    <label for="cardHolderName">{item.inputName}</label>
                                    <input onBlur={this.handleChange.bind(this)} ref={item.id} name="cardHolderName" type="text" placeholder={item.placeholder} />
                                </li>
                                )
                            }
                        </ul>
                    </div>
                    )
                }
            </div>
        )
    }
}