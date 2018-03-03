import React, {Component} from 'react';
import DataTable from './DataTable';
import namesAndAges from './data/namesAndAges';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <DataTable data={namesAndAges} />
        </div>
      </div>
    );
  }
}

export default App;
