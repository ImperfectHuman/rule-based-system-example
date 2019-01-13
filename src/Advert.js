import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="Advert border">
        {this.props.ad.label}
        {this.props.ad.impulseBuy ? <span className="badge badge-info">Impulse Buy</span> : ""}
        {this.props.ad.location ? <span className="badge badge-info">{this.props.ad.location}</span> : ""}
      </div>
    );
  }
}

export default Advert;
