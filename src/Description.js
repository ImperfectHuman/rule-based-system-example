import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Description extends Component {
  render() {
    return (
      <div className="Description card">
        <h3 className="card-title bg-primary text-white">Description</h3>
        <div className="card-body">This is where the description will go</div>
      </div>
    );
  }
}

export default Description;
