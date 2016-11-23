/**
 * Created by zhoufei on 2016/11/22.
 */
import React from 'react'
import index from '../assets/js/indexJson.js';
import IndexLink from '../components/IndexLink.js';
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <IndexLink list={index.list} listDetail={index.listDetail} />
        )
    }
}