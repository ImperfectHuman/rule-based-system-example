import React, { Component } from 'react';
import Rule from './Rule';

class RulesDisplay extends Component {
  render() {
    return (
      <div className="RulesDisplay card">
        <h3 className="card-title bg-primary text-white">Rules</h3>
        <div className="card-body">
          {this.props.rules.map((r,index) => (<Rule rule={r} key={index} />))}
        </div>
      </div>
    );
  }
}

export default RulesDisplay;
