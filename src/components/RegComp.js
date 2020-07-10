import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("**************Regular Cmp Render************")
        return (
            <div>
                Regular Comp {this.props.name}
            </div>
        )
    }
}

export default RegComp
