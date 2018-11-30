import React from 'react'
// 无状态组件，UI组件
export default function rankingUI(props){
    return (
        <div id="ranking"  className="page">
            <h1>这是ranking组件</h1>
            {/* <ul className="list">
            {
                props.data.map((item, index)=>{
                    return (
                        <li className="item" key={index} onClick={props.goDetail.bind(this, index)}>
                            {item}
                        </li>
                    )
                })
            }
            </ul> */}
        </div>
    )
}
