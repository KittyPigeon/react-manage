
import React, { Component } from 'react'

export default class Tabbar extends Component {
    render() {
        return (
            <div className="tab-bar">
                <input type="text" className="search"/>
                <button>搜索</button>
            </div>
        )
    }
}
