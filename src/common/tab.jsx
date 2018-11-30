import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import './tab.scss'
export default class tab extends Component {
  constructor(params) {
    super(params);
  }
  render() {
    return (
        <ul className="tabs">
            <li><NavLink to="/" exact>首页</NavLink></li>
            <li><NavLink to="/ranking">排行榜</NavLink></li>
            <li><NavLink to="/search">搜索</NavLink></li>
        </ul>
    )
  }
}
