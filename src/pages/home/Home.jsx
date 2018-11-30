import React, { Component } from "react";
import "./Home.scss";
import "whatwg-fetch";

export default class Home extends Component {
  constructor(params) {
    super(params);
  }
  render() {
    return (
      <div className="page">
        <div>
          <p>主页</p>
          <p>主页</p>
          <p>主页</p>
          <p>主页</p>
          <p>主页</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")
      .then(res => {
        return res.json();
      })
      .then(res => {
          console.log(res.data);
      });
  }
}
