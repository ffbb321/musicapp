import React, {Component} from 'react'
import rankingUI from "./rankingUI";
// import './rankingstyle.scss'

// 复杂组件,容器组件
export default class Ranking extends Component{
    constructor(){
        super();
        // this.state = {
        //     list: ['a', 'b', 'c', 'd']
        // }
    }
    render(){
        // let {list} = this.state;

        // return <rankingUI data={list} goDetail={this.goDetail.bind(this)}/>
        return <rankingUI/>
    }

    // goDetail(index){
    //     this.props.history.push({pathname: '/one/detail', state: {index}});
    // }

}