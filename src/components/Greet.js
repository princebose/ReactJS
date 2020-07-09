import React from 'react'

function Greet(props) {
    //return React.createElement('div',null,React.createElement('h1',null,'Greet Compnent'))
    return (
        <div className="App">
            <h1 > Hello {props.name} a.k.a {props.heroName} from Greet</h1>
            <h3 >{props.children}</h3>
        </div>
    )
} //JSX - Javascript and HTML combined, JS compiles HTML as well

// const Greet = ()=>{
//     return(
//         <div className="App">
//         <h1>Hello from Greet Component using arrow fn.</h1>
//         </div>
//     )

// }

export default Greet;