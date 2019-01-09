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

    let weight = <div></div>
    if (rule.tiebreakweight && rule.tiebreakweight > 1) {
      weight = <div>This rule is <em>{rule.tiebreakweight}</em> times as
                  likely as normal to be picked during tiebreaks of rules of the
                  same priority.</div>
    }
    return <div>{description}{weight}</div>;
  }

  render() {
    return (
      <div className="Rule">
        <div className="container">
          <div className="row">
            <div className="col-3">Priority {this.props.rule.priority}</div>
            <div className="col">{this.getActionDescription(this.props.rule)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rule;
