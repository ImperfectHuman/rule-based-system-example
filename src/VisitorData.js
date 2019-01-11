import React, { Component } from 'react';

class VisitorData extends Component {
  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
  }

  recalculate(e) {
    this.props.recalculate();
  }

  render() {
    return (
      <div className="VisitorData card">
        <h3 className="card-title bg-primary text-white">Visitor Data</h3>
        <div className="card-body">
          <div className="container">
            <div className="row">
              Configuration option
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitorData;
