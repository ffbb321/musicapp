import React, {Component} from 'react'
import RankingUI from "./rankingUI";

import API from '../../api'
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
        return <RankingUI/>
    }
    componentDidMount(){
        fetch(API.TOPLIST_API)
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(result => {
            console.log(result)
            // this.setState({channels: result.data});
        })
      }

    // goDetail(index){
    //     this.props.history.push({pathname: '/one/detail', state: {index}});
    // }

}