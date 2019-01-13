import React, { Component } from 'react';
import Advert from './Advert';

class WebsiteOutput extends Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  refresh(e) {
    this.props.refresh();
  }

  getAdRow(ads, rowIndex) {
    return (<div className="row" key={rowIndex}>
              { ads.map(ad => (<div className="col" key={ad.id}><Advert ad={ad} /></div>)) }
            </div>);
  }

  getAdRows() {
    const rowLength = 3;
    const toChunk = [...this.props.ads];
    let rows = [];
    while (toChunk.length) {
      rows.push(toChunk.splice(0,rowLength));
    }
    return rows.map((r,i) => this.getAdRow(r,i));
  }

  render() {
    return (
      <div className="WebsiteOutput card">
        <h3 className="card-title bg-primary text-white">Website Output <button className="btn btn-secondary" onClick={this.refresh}>Refresh results</button></h3>
        <div className="card-body container">
          { this.getAdRows() }
        </div>
      </div>
    );
  }
}

export default WebsiteOutput;
