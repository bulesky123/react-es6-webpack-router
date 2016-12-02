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
                    this.setState({
                        data:data.content.orderList
                    });
            }.bind(this)
        })
    }
    onGenderChange(gender){
        this.setState({genderFilter: gender});
    }
    onNameChange(name) {
        this.setState({nameFilter: name});
    }
    onDeleteScoreItem(id){
        const fanilData=[];
        this.state.data.map(function(item){
            if(item._id!=id) {
                fanilData.push(item);
            }
        });
        this.setState({data:fanilData})
    }
    render(){
        return (
            <div className="boxPadding">
                <NameFilter onNameChange={this.onNameChange.bind(this)} nameFilter={this.state.nameFilter}/>
                <GenderFilter onGenderChange={this.onGenderChange.bind(this)} genderFilter={this.state.genderFilter}/>
                <div className="addBox"><button className="addBtn">添加记录</button></div>
                <ScoreTable deleteScoreItem={this.onDeleteScoreItem.bind(this)} scoreNotes={this.state.data} genderFilter={this.state.genderFilter} nameFilter={this.state.nameFilter} />
                <AddScoreItem />
            </div>
        );
    }
};
class AddScoreItem extends React.Component{
    render () {
        return (<div></div>)
    }
}
class GenderFilter extends React.Component{
    genderChangeHandler() {
        this.props.onGenderChange(this.refs.genderFilter.value);
    }
    render () {
        return (
            <div className="condition-item left sex">
                <label>
                    <span>按性别筛选:</span>
                </label>
                <select onChange={this.genderChangeHandler.bind(this)} ref="genderFilter">
                    <option value="0">All</option>
                    <option value="1">男生</option>
                    <option value="2">女生</option>
                </select>
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
            <div className="condition-item right name">
                <label>
                    <span>按姓名筛选:</span>
                </label>
                <input type="text" ref="nameFilter" onChange={this.nameChangeHandler.bind(this)} value={this.props.nameFilter}/>
            </div>
        );
    }
};
class ScoreTable extends React.Component{
    deleteItemHandler(id){
       this.props.deleteScoreItem(id);
    }
    render () {
        var scoreNotes = [];
        var genderFilter =+ this.props.genderFilter,
            nameFilter = this.props.nameFilter,
            GENDER = ['', '男', '女'];
        this.props.scoreNotes.map(function (scoreItem) {
            if (genderFilter !== 0 && nameFilter === '') {
                // 仅genderfilter生效
                if (GENDER[genderFilter] === scoreItem.gender) {
                    scoreNotes.push(<ScoreItem onDelete={this.deleteItemHandler.bind(this)} score={scoreItem}/>);
                }
                return;
            }
            if (genderFilter === 0 && nameFilter !== '') {
                // 仅nameFilter生效
                if (scoreItem.name === nameFilter) {
                    scoreNotes.push(<ScoreItem onDelete={this.deleteItemHandler.bind(this)} score={scoreItem} />);
                }
                return;
            }
            if (genderFilter !== 0 && nameFilter !== '') {
                // 两个filter都生效
                if (GENDER[genderFilter] === scoreItem.gender && scoreItem.name === nameFilter) {
                    scoreNotes.push(<ScoreItem onDelete={this.deleteItemHandler.bind(this)} score={scoreItem}/>);
                }
                return;
            }
            scoreNotes.push(<ScoreItem onDelete={this.deleteItemHandler.bind(this)} score={scoreItem} />);
        }.bind(this));
        return (
            <table className="detailDialog">
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
    handleClick(){
        this.props.onDelete(this.props.score._id);
    }
    render() {
        var score = this.props.score;
        return (
            <tr>
                <td>{score.name}</td>
                <td>{score.gender}</td>
                <td>{score.chinese}</td>
                <td>{score.math}</td>
                <td><span className="trigger">修改</span><span onClick={this.handleClick.bind(this)} className="trigger">删除</span></td>
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