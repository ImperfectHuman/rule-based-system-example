import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Description extends Component {
  render() {
    return (
      <div className="Description card">
        <h3 className="card-title bg-primary text-white">Description</h3>
        <div className="card-body">
          <p>This sample rule set has been configured with the logic:</p>
          <ul>
            <li>Sport adverts are more profitable, and we want a bias towards displaying them.</li>
            <li>When we run out of more specific rules it's best to fill with adverts across a range of categories.</li>
            <li><span className="badge badge-secondary">TODO</span> Morning commuters are impressionable but too alert to impulse buy</li>
            <li><span className="badge badge-secondary">TODO</span> Evening commuters are tired, and liable to impulse buy</li>
            <li><span className="badge badge-secondary">TODO</span> When we have site-wide promotions they are strategically important for our brand</li>
            <li><span className="badge badge-secondary">TODO</span> When we know about user interests we should advertise on those ahead of other content to increase purchasing</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Description;
