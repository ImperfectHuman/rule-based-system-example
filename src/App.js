import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RulesDisplay from './RulesDisplay';
import VisitorData from './VisitorData';
import WebsiteOutput from './WebsiteOutput';
import Description from './Description';

import KnowledgeBase from './data/myKnowledgeBase';
import myActionLibrary from './actions/myActionLibrary';
import Ads from './data/ads';
import tiebreaker from './tiebreaker';
import orchestrator from 'rule-based-system/orchestrator';

class App extends Component {

  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
    this.state = { numSlots: 8 , output: { }};
  }

  componentDidMount() {
    this.recalculate();
  }

  updateresults(output) {
    this.setState(Object.assign(this.state, {output}));
  }

  recalculate() {
    const currentAds = JSON.parse(JSON.stringify(Ads));
    const initialState = { numSlots: this.state.numSlots, pool: currentAds, selected: [] };
    orchestrator(initialState, KnowledgeBase, myActionLibrary, {tiebreaker})
      .then(result => this.updateresults(result));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <RulesDisplay rules={KnowledgeBase.rules} />
            </div>
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <WebsiteOutput
                        ads={this.state.output.selected ? this.state.output.selected : []}
                        numSlots={this.state.numSlots}
                        recalculate={this.recalculate} />
                  </div>
                </div>
            {/* TODO - allow configuration of user information
              <div className="row">
                <div className="col">
                  <VisitorData />
                </div>
              </div>
            */}
              <div className="row">
                <div className="col">
                  <Description />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
