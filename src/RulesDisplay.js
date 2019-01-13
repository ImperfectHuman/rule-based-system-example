import React, { Component } from 'react';
import Rule from './Rule';

class RulesDisplay extends Component {
  render() {
    return (
      <div className="RulesDisplay card">
        <h3 className="card-title bg-primary text-white">Rules</h3>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Purpose</th>
                <th className="border-left border-right text-center">Conditions</th>
                <th className="text-center">Steps taken</th>
              </tr>
            </thead>
            <tbody>
              {this.props.rules.map((r,index) => (<Rule rule={r} key={index} />))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RulesDisplay;
