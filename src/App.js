import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RulesDisplay from './RulesDisplay';
import VisitorData from './VisitorData';
import WebsiteOutput from './WebsiteOutput';
import Description from './Description';

import KnowledgeBase from './config/myKnowledgeBase';
import myActionLibrary from './config/myActionLibrary';
import adsFactory from './config/ads';
import tiebreaker from './tiebreaker';
import orchestrator from 'rule-based-system/orchestrator';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numSlots: 9,
      output: { },
      config: {
        includePromo: true
      }
    };
    this.refresh = this.refresh.bind(this);
    this.configChanged = this.configChanged.bind(this);
  }

  componentDidMount() {
    // this.recalculate(this.state);
  }

  configChanged(config) {
    this.recalculate(Object.assign(this.state, {config}));
  }

  refresh() {
    this.recalculate(this.state);
  }

  recalculate(newState) {
    const inputState = {
      numSlots: newState.numSlots,
      period: newState.config.period,
      pool: adsFactory(newState.config.includePromo),
      selected: []
    };
    orchestrator(inputState, KnowledgeBase, myActionLibrary, {tiebreaker})
      .then(result => this.setState(Object.assign(newState, {output: result})));
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
                        refresh={this.refresh} />
                  </div>
                </div>
              <div className="row">
                <div className="col">
                  <VisitorData configChanged={this.configChanged} />
                </div>
              </div>
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
