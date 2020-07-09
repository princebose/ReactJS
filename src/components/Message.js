import React, { Component } from 'react'
//This is to understand states
class Message extends Component {

    constructor() {
        super()
        this.state = {
            message:"Welcome Visitor"
        }
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.message} {this.props.name}</h1>               
            </div>
        )
    }
}

export default Message
