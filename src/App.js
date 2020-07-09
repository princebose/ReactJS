import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import A from './components/Greet'
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
        <h1>Hello World</h1>
        <A heroName="Superman" name="Clark">
          <p>This is children props</p></A>
        <A heroName="Batman" name="Bruce"></A>
        <A heroName="Spiderman" name="Peter"></A>
        <A heroName="He-Man" name="Prince"></A>
      </div>
    );
  }
}
export default App;
