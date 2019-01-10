import React, { Component } from 'react';

class Rule extends Component {

  getActionDescription(rule) {

    let description = <div></div>;
    if (rule.action === "ADDONE") {
        description = <div>Add one advert from the <strong>{rule.actionConfig.category}</strong> category
                   if one is available and there aren't already at
                   least <strong>{rule.actionConfig.upTo}</strong> ads from that
                   category present.</div>
    }

    return description;
  }

  render() {
    const rule = this.props.rule;
    return (
      <div className="Rule border border-dark">
            <span className="badge badge-secondary">Priority {rule.priority}</span>
            {rule.tiebreakweight && rule.tiebreakweight > 1 ? <span className="badge badge-info">{rule.tiebreakweight}x tiebreak chance</span> : ""}
            {this.getActionDescription(this.props.rule)}
      </div>
    );
  }
}

export default Rule;
