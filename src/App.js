import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/sample';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Sample></Sample>
    );
    }
}

function Home() {
  return (
    <div>
      <h2>Hello this is Home page </h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Detail for React page</h2>
    </div>
  );
}


function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}
export default App;



 // <div className="App">
      //   <header className="App-header">
        
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       <code>src/App.js</code> and save
      // <Sample></Sample>
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //     <Router>
      //       <div>
      //         <ul>
      //           <li>
      //             <Link to="/">Home</Link>
      //           </li>
      //           <li>
      //             <Link to="/about">About</Link>
      //           </li>
      //           <li>
      //             <Link to="/topics">Topics</Link>
      //           </li>
      //         </ul>

      //         <hr />
      //         <Route exact path="/" component={Home} />
      //         <Route path="/about" component={About} />
      //         <Route path="/topics" component={Topics} />
      //       </div>
      //     </Router>
      //   </header>
      // </div>