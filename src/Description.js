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
            web page, we've configured this sample rule set that takes various
            pieces of user data (including geographic location, age, and
            interests) into account.
          </p>
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
          <p>We've supported the following logic in our rule set:</p>
          <ul>
            <li>
              When we have site-wide promotions they are strategically important
              for our brand, so include them.
            </li>
            <li>
              Suppress adverts that don't meet user interests or for other
              reasons (e.g. Adult adverts should be suppressed for children).
            </li>
            <li>
              Use geographic data to provide information for local business.
            </li>
            <li>
              When we know about user interests, or needs (e.g. loving or hating
              DIY), we should advertise or suppress those ahead of other content
              to increase purchasing likelihood.
            </li>
            <li>
              Morning commuters are impressionable but too alert to impulse buy,
              so advertise ideas (films, books) and suppress impulse buy ads.
            </li>
            <li>
              Evening commuters are tired, and liable to impulse buy, so
              suppress ads that aren't impulse buys.
            </li>
            <li>
              Sport adverts are more profitable, and we want a bias towards
              displaying them.
            </li>
            <li>
              When we run out of more specific rules it's best to fill with
              adverts across a range of categories.
            </li>
            <li>
              If we don't have a range of categories available, fill with
              whatever we have.
            </li>
          </ul>
          <p>
            All rules have a condition of there being advertisting slots
            available, as we can stop processing if there aren't. This sort of
            implementation decision wouldn't need to be shown to a typical user,
            but is included here for demonstration reasons.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;
