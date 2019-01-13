import React, { Component } from 'react';
import Advert from './Advert';

class AdList extends Component {

  getAd(ad) {
    return (
      <li key={ad.id}>
        <Advert ad={ad} />
      </li>
    );
  }

  render() {
    let ads = undefined;
    if (this.props.ads && this.props.ads.length) {
        ads = this.props.ads.map(ad => this.getAd(ad));
    }
    return (
      <div className="AdDetailsDisplay card">
        <h3 className="card-title bg-primary text-white">Ad List</h3>
        <div className="card-body">
          <ul>
            { ads }
          </ul>
        </div>
      </div>
    );
  }
}

export default AdList;
