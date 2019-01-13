import React, { Component } from 'react';

class VisitorData extends Component {
  constructor(props) {
    super(props);
    this.promoAvailable = this.promoAvailable.bind(this);
    this.timeChanged = this.timeChanged.bind(this);
    this.locationChanged = this.locationChanged.bind(this);
    this.isChild = this.isChild.bind(this);
    this.state =  {
      includePromo: true,
      period: "morning commute",
      isChild: false
    }
  }

  promoAvailable(e) {
    const includePromo = e.target.checked;
    this.setState({includePromo});
  }

  isChild(e) {
    const isChild = e.target.checked;
    this.setState({isChild});
  }

  timeChanged(e) {
    const period = e.target.value;
    this.setState({period});
  }

  locationChanged(e) {
    const location = e.target.value;
    if (location !== "unknown") {
      this.setState({location});
    } else {
      this.setState({location: undefined});
    }
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
          <table>
            <tbody>
              <tr className="border-top border-bottom">
                <td><input type="checkbox" defaultChecked onChange={this.promoAvailable} /></td>
                <td>Include site-wide promo</td>
              </tr>
              <tr className="border-top border-bottom">
                <td><select value={this.state.period} onChange={this.timeChanged}>
                  <option value="breakfast">Breakfast</option>
                  <option value="morning commute">Morning commute</option>
                  <option value="lunchtime">Lunchtime</option>
                  <option value="evening commute">Evening commute</option>
                  <option value="evening">Evening</option>
                </select></td>
                <td>Period</td>
              </tr>
              <tr className="border-top border-bottom">
                <td><input type="checkbox" onChange={this.isChild} /></td>
                <td>User identified as child</td>
              </tr>
              <tr className="border-top border-bottom">
                <td><select value={this.state.location} onChange={this.locationChanged}>
                  <option value="unknown">Unknown</option>
                  <option value="London">London</option>
                  <option value="New York">New York</option>
                </select></td>
              <td>Location</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VisitorData;
