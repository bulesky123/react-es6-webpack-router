/**
 * Created by zhoufei on 2016/11/22.
 */

import React from 'react'
import movie from '../assets/js/movie.js';
import Cell from '../components/cell.js';

export default class Moive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Cell list={movie.info} />
        )
    }
}
