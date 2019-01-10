import React, { Component } from 'react';

class Rule extends Component {

  getActionDescription(rule) {

    let description = <div></div>;
    if (rule.action === "ADDONE") {
        description = <div>Add one advert from the <em>{rule.actionConfig.category}</em> category
                   if one is available and there aren't already at
                   least <em>{rule.actionConfig.upTo}</em> ads from that
                   category present.</div>
    }

    return description;
  }

  render() {
    const rule = this.props.rule;
    return (
      <div className="Rule">
        <div className="container">
          <div className="row border border-dark">
            <div className="col-3"><span className="badge badge-secondary">Priority {rule.priority}</span>
              {rule.tiebreakweight && rule.tiebreakweight > 1 ? <span className="badge badge-info">{rule.tiebreakweight}x tiebreak chance</span> : ""}
            </div>
            <div className="col">{this.getActionDescription(this.props.rule)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rule;
