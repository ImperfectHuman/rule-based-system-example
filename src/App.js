import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RulesDisplay from './RulesDisplay';
import VisitorData from './VisitorData';
import WebsiteOutput from './WebsiteOutput';
import Description from './Description';

import Rules from './data/rules';

class App extends Component {
  render() {

    const ads = [
      { label: "No Ad #1", id: "NoAd1" },
      { label: "No Ad #2", id: "NoAd2" },
      { label: "No Ad #3", id: "NoAd3" },
      { label: "No Ad #4", id: "NoAd4" },
      { label: "No Ad #5", id: "NoAd5" },
      { label: "No Ad #6", id: "NoAd6" },
      { label: "No Ad #7", id: "NoAd7" },
      { label: "No Ad #8", id: "NoAd8" }
    ];

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <RulesDisplay rules={Rules} />
            </div>
            <div className="col">
              <VisitorData />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <WebsiteOutput ads={ads} />
            </div>
            <div className="col">
              <Description />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
