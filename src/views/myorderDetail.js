/**
 * Created by zhoufei on 2016/11/26.
 */
import React from 'react'
var _score = [
    {name: '张三', gender: '男', chinese: 85, math: 98, _id:0},
    {name: '张三', gender: '女', chinese: 95, math: 90, _id:1},
    {name: '李四', gender: '男', chinese: 65, math: 48, _id:2},
    {name: '大妹', gender: '女', chinese: 95, math: 100, _id:3},
    {name: '王五', gender: '男', chinese: 75, math: 88, _id:4},
    {name: '赵钱', gender: '男', chinese: 75, math: 98, _id:5},
    {name: '二妹', gender: '女', chinese: 90, math: 98, _id:6}
];

class StudentScoreTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genderFilter: 0,
            nameFilter: '',
            data: _score,
            modifyScore: null,
            className: 'dialog modify'
        }
    }
    onGenderChange(gender){
        this.setState({genderFilter: gender});
    }
    onDeleteScoreItem (id){
        var data = this.state.data.map(function (item) {
            if(item._id === id) {
                item.deleteFlag = true;
            }
            return item;
        });

        this.setState(data, data);
    }
    onNameChange(name) {
        this.setState({nameFilter: name});
    }
    render(){
        return (
            <div>
                <GenderFilter onGenderChange={this.onGenderChange.bind(this)} genderFilter={this.state.genderFilter}/>
                <NameFilter onNameChange={this.onNameChange.bind(this)} nameFilter={this.state.nameFilter}/>
                <ScoreTable
                    scoreNotes={this.state.data}
                    genderFilter={this.state.genderFilter}
                    nameFilter={this.state.nameFilter}
                    deleteScoreItem={this.onDeleteScoreItem.bind(this)}
                    modifyItem={this.onModify}
                />
            </div>
        );
    }
};

class GenderFilter extends React.Component{
    genderChangeHandler() {
        this.props.onGenderChange(this.refs.genderFilter.getDOMNode().value);
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
        this.props.onNameChange(this.refs.nameFilter.getDOMNode().value);
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
    deleteItemHandler(id) {
        this.props.deleteScoreItem(id);
    }
    modifyItem (id) {
        this.props.modifyItem(id);
    }
    render () {
        var scoreNotes = [];
        var genderFilter = +this.props.genderFilter,
            nameFilter = this.props.nameFilter,
            GENDER = ['', '男', '女'],
            _this = this;

        this.props.scoreNotes.map(function (scoreItem) {
            if (genderFilter !== 0 && nameFilter === '') {
                // 仅genderfilter生效
                if (GENDER[genderFilter] === scoreItem.gender) {
                    !scoreItem.deleteFlag && scoreNotes.push(<ScoreItem score={scoreItem} onDelete={_this.deleteItemHandler.bind(this)} onModify={_this.modifyItem.bind(this)}/>);
                }
                return;
            }

            if (genderFilter === 0 && nameFilter !== '') {
                // 仅nameFilter生效
                if (scoreItem.name === nameFilter) {
                    !scoreItem.deleteFlag && scoreNotes.push(<ScoreItem score={scoreItem} onDelete={_this.deleteItemHandler.bind(this)} onModify={_this.modifyItem.bind(this)}/>);
                }
                return;
            }

            if (genderFilter !== 0 && nameFilter !== '') {
                // 两个filter都生效
                if (GENDER[genderFilter] === scoreItem.gender && scoreItem.name === nameFilter) {
                    !scoreItem.deleteFlag && scoreNotes.push(<ScoreItem score={scoreItem} onDelete={_this.deleteItemHandler.bind(this)} onModify={_this.modifyItem.bind(this)}/>);
                }
                return;
            }

            !scoreItem.deleteFlag && scoreNotes.push(<ScoreItem score={scoreItem} onDelete={_this.deleteItemHandler.bind(this)} onModify={_this.modifyItem.bind(this)}/>);
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
    deleteHandler (e, id) {
        this.props.onDelete(this.props.score._id);
    }
    modifyHandler() {
        this.props.onModify(this.props.score._id);
    }
    render() {
        var score = this.props.score;

        return (
            <tr>
                <td>{score.name}</td>
                <td>{score.gender}</td>
                <td>{score.chinese}</td>
                <td>{score.math}</td>
                <td><span className="trigger" onClick={this.modifyHandler.bind(this)}>修改</span><span className="trigger" onClick={this.deleteHandler.bind(this)}>删除</span></td>
            </tr>
        );
    }
};
export default class Tbale extends React.Component{
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