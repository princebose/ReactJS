import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()

        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }


    //No this inside event handler
    clickHandler(){
        this.setState({
            message:"Bye"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <div>
                    {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                    <button onClick={this.clickHandler}>Click</button>
                </div>

            </div>
        )
    }
}

export default EventBind
