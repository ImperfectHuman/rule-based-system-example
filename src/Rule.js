import React, { Component } from 'react';

class Rule extends Component {

  render() {
    const rule = this.props.rule;
    return (
      <tr className="Rule border-top border-bottom">
        <td>
          <span className="badge badge-secondary">Priority {rule.priority}</span>
          {rule.tiebreakweight && rule.tiebreakweight > 1 ? <span className="badge badge-info">{rule.tiebreakweight}x tiebreak chance</span> : ""}
        </td>
        <td>
          <ul className="list-unstyled">
            {this.props.rule.actionConfig.conditions.map((c,index) => <li key={index}>{c.label}</li>)}
          </ul>
        </td>
        <td>
          <ul className="list-unstyled">
            {this.props.rule.actionConfig.steps.map((s,index) => <li key={index}>{s.label}</li>)}
          </ul>
        </td>
      </tr>
    );
  }
  
}

export default Rule;
