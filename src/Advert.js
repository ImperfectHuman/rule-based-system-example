import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="Advert border">
        {this.props.ad.label}
        {this.props.ad.impulseBuy ? <><br /><span className="badge badge-info">Impulse Buy</span></> : ""}
        {this.props.ad.location ? <><br /><span className="badge badge-warning">{this.props.ad.location}</span></> : ""}
      </div>
    );
  }
}

export default Advert;
