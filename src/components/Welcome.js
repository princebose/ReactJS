import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h1 > Hello {this.props.name} a.k.a {this.props.heroName} from Greet</h1>
                <h3 >{this.props.children}</h3>
            </div>
        )
    }
}

export default Welcome
