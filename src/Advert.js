import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="Advert border">
        {this.props.ad.label}
        {this.props.ad.impulseBuy ? <span className="badge badge-info">Impulse Buy</span> : ""}
      </div>
    );
  }
}

export default Advert;
