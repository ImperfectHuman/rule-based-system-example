import React, { Component } from 'react';
import Advert from './Advert';

class WebsiteOutput extends Component {

  getAdRow(ads) {
    return (<div className="row">
              { ads.map(ad => (<div className="col" key={ad.id}><Advert ad={ad} /></div>)) }
            </div>);
  }
  render() {
    return (
      <div className="WebsiteOutput card">
        <h3 className="card-title bg-primary text-white">Website Output</h3>
        <div className="card-body container">
          { this.getAdRow(this.props.ads.slice(0,4)) }
          { this.getAdRow(this.props.ads.slice(4,8)) }
        </div>
      </div>
    );
  }
}

export default WebsiteOutput;
