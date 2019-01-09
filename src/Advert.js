import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="Advert">
        {this.props.ad.label}
      </div>
    );
  }
}

export default Advert;
