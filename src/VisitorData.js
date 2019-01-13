import React, { Component } from 'react';

class VisitorData extends Component {
  constructor(props) {
    super(props);
    this.promoAvailable = this.promoAvailable.bind(this);
    this.state =  {
      includePromo: true
    }
  }

  promoAvailable(e) {
    const includePromo = e.target.checked;
    this.setState({includePromo});
  }

  recalculate() {
    this.props.configChanged(this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.recalculate();
    }
  }

  componentDidMount() {
    this.recalculate();
  }

  render() {
    return (
      <div className="VisitorData card">
        <h3 className="card-title bg-primary text-white">Config and Visitor Data</h3>
        <div className="card-body">
          <div className="container">
            <div className="row">
                <input id="includePromo" type="checkbox" defaultChecked onChange={this.promoAvailable} />
                Include site-wide promo
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitorData;
