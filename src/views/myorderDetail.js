/**
 * Created by zhoufei on 2016/11/26.
 */
import React from 'react'
import Mock from '../assets/mockCtrl/table'
import $ from 'webpack-zepto'
class StudentScoreTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genderFilter: 0,
            nameFilter: '',
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url:'order/tableDate',
            dataType:'json',
            success:function(data){
                setTimeout(function(){
                    this.setState({
                        data:data.content.orderList
                    });
                }.bind(this),1000)
            }.bind(this)
        })
    }
    onGenderChange(gender){
        this.setState({genderFilter: gender});
    }
    onNameChange(name) {
        this.setState({nameFilter: name});
    }
    render(){
        return (
            <div>
                <GenderFilter onGenderChange={this.onGenderChange.bind(this)} genderFilter={this.state.genderFilter}/>
                <NameFilter onNameChange={this.onNameChange.bind(this)} nameFilter={this.state.nameFilter}/>
                <ScoreTable scoreNotes={this.state.data} genderFilter={this.state.genderFilter} nameFilter={this.state.nameFilter} />
            </div>
        );
    }
};

class GenderFilter extends React.Component{
    genderChangeHandler() {
        this.props.onGenderChange(this.refs.genderFilter.value);
    }
    render () {
        return (
            <div className="condition-item">
                <label>
                    <span>按性别筛选</span>
                    <select onChange={this.genderChangeHandler.bind(this)} ref="genderFilter">
                        <option value="0">All</option>
                        <option value="1">男生</option>
                        <option value="2">女生</option>
                    </select>
                </label>
            </div>
        );
    }
};

class NameFilter extends React.Component{
    nameChangeHandler() {
        this.props.onNameChange(this.refs.nameFilter.value);
    }
    render () {
        return (
            <div className="condition-item">
                <label>
                    <span>按姓名筛选</span>
                    <input type="text" ref="nameFilter" onChange={this.nameChangeHandler.bind(this)} value={this.props.nameFilter}/>
                </label>
            </div>
        );
    }
};
class ScoreTable extends React.Component{
    render () {
        var scoreNotes = [];
        var genderFilter =+ this.props.genderFilter,
            nameFilter = this.props.nameFilter,
            GENDER = ['', '男', '女'];
        this.props.scoreNotes.map(function (scoreItem) {
            if (genderFilter !== 0 && nameFilter === '') {
                // 仅genderfilter生效
                if (GENDER[genderFilter] === scoreItem.gender) {
                    scoreNotes.push(<ScoreItem score={scoreItem}/>);
                }
                return;
            }
            if (genderFilter === 0 && nameFilter !== '') {
                // 仅nameFilter生效
                if (scoreItem.name === nameFilter) {
                    scoreNotes.push(<ScoreItem score={scoreItem} />);
                }
                return;
            }
            if (genderFilter !== 0 && nameFilter !== '') {
                // 两个filter都生效
                if (GENDER[genderFilter] === scoreItem.gender && scoreItem.name === nameFilter) {
                    scoreNotes.push(<ScoreItem score={scoreItem}/>);
                }
                return;
            }
            scoreNotes.push(<ScoreItem score={scoreItem} />);
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>语文</th>
                    <th>数学</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {scoreNotes}
                </tbody>
            </table>
        );
    }
};
class ScoreItem extends React.Component{
    render() {
        var score = this.props.score;
        return (
            <tr>
                <td>{score.name}</td>
                <td>{score.gender}</td>
                <td>{score.chinese}</td>
                <td>{score.math}</td>
                <td><span className="trigger" >修改</span><span className="trigger">删除</span></td>
            </tr>
        );
    }
};
export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <StudentScoreTable />
        )
    }
}