import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RulesDisplay from './RulesDisplay';
import VisitorData from './VisitorData';
import WebsiteOutput from './WebsiteOutput';
import Description from './Description';

class App extends Component {
  render() {

    const ads = [
      "No Ad #1",
      "No Ad #2",
      "No Ad #3",
      "No Ad #4",
      "No Ad #5",
      "No Ad #6",
      "No Ad #7",
      "No Ad #8"
    ];

    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col">
              <RulesDisplay />
            </div>
            <div class="col">
              <VisitorData />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <WebsiteOutput ads={ads} />
            </div>
            <div class="col">
              <Description />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
