import React, { Component } from 'react';
import './CurrentBuild.css';
import PartSelected from '../PartSelected/PartSelected';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CurrentBuild extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <PartSelected
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
          key={idx}

        />
      );
    })
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(this.props.total)}
          </div>
        </div>
      </section>
    )
  }


}
export default CurrentBuild;