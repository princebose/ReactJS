import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello World
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>Hello World</h1>
      <Greet></Greet>
    </div>
    );
  }
}
export default App;
