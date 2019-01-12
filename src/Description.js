import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Description extends Component {
  render() {
    return (
      <div className="Description card">
        <h3 className="card-title bg-primary text-white">Description</h3>
        <div className="card-body">
          <p>
            Based on the mock scenario of selecting interesting adverts for a
            web page, this sample rule set has been configured with the
            following logic:
          </p>
          <ul>
            <li>When we have site-wide promotions they are strategically important for our brand</li>
            <li>Sport adverts are more profitable, and we want a bias towards displaying them.</li>
            <li>When we run out of more specific rules it's best to fill with adverts across a range of categories.</li>
            <li>Morning commuters are impressionable but too alert to impulse buy, so advertise ideas (films, books)</li>
            <li><span className="badge badge-secondary">TODO</span> Evening commuters are tired, and liable to impulse buy</li>
            <li><span className="badge badge-secondary">TODO</span> When we know about user interests, or needs (e.g. parents of young children), we should advertise on those ahead of other content to increase purchasing</li>
            <li><span className="badge badge-secondary">TODO</span> Use geographic data to provide information for local business</li>
            <li><span className="badge badge-secondary">TODO</span> Suppress adverts that don't meet user interests.</li>
          </ul>
          <p>
            While you would probably want to provied an interface so that your
            expert team is able to reconfigure the system (e.g. to tie in with
            current events, such as movie releases, the Olympic games, etc.)
            this demonstration doesn't allow configuration of the rules.
          </p>
          <p>
            We're also not addressing here a process to select or group adverts.
            In practice ad-space might have been purchased, and the adverts
            grouped using human-assigned categories, which is the aapproach
            we're approximating here. Other approaches might use keyword
            identification, sentiment analysis, profitability, recency, number
            of click-throughs, rate of sales, whether an advert's been seen
            already, or any other form of data that you have (or can collect)
            that can be used to make a decision to select or suppress an advert.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;
