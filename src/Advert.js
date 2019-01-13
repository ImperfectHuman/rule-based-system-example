import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="Advert border">
        {this.props.ad.label}
        {this.props.ad.categories.includes("Adult") ? <><br /><span className="badge badge-danger">Adult</span></> : ""}
        {this.props.ad.categories.includes("DIY") ? <><br /><span className="badge badge-dark">DIY</span></> : ""}
        {this.props.ad.categories.includes("SitePromo") ? <><br /><span className="badge badge-warning">Site promo</span></> : ""}
        {this.props.ad.impulseBuy ? <><br /><span className="badge badge-info">Impulse Buy</span></> : ""}
        {this.props.ad.location ? <><br /><span className="badge badge-success">{this.props.ad.location}</span></> : ""}
      </div>
    );
  }
}

export default Advert;
