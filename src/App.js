import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import A from './components/Greet'
import W from './components/Welcome'
import M from './components/Message'
import C from './components/Counter'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello World
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <M name="Prince"></M>
        <C></C>
        {/* <h1>Hello World</h1>
        <A heroName="Superman" name="Clark">
          <p>This is children props</p></A>
        <A heroName="Batman" name="Bruce"></A>
        <A heroName="Spiderman" name="Peter">
          <button>Action</button>
        </A>
        <A heroName="He-Man" name="Prince"></A>
        <W heroName="He-Man" name="Prince"></W>
        <W heroName="He-Man" name="Prince"></W>
        <W heroName="He-Man" name="Prince"></W> */}
        
      </div>
    );
  }
}
export default App;
