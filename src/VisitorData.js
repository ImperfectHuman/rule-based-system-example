import React, { Component } from 'react';

class VisitorData extends Component {
  constructor(props) {
    super(props);
    this.promoAvailable = this.promoAvailable.bind(this);
    this.timeChanged = this.timeChanged.bind(this);
    this.state =  {
      includePromo: true,
      period: "morning commute"
    }
  }

  promoAvailable(e) {
    const includePromo = e.target.checked;
    this.setState({includePromo});
  }

  timeChanged(e) {
    const period = e.target.value;
    this.setState({period});
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
                <td><input id="includePromo" type="checkbox" defaultChecked onChange={this.promoAvailable} /></td>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VisitorData;
