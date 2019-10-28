import React, { Component } from 'react';
import './PartList.css';

import Part from'../Part/Part'



class PartList extends Component {
  render(){
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item, index) => {
        
        return (
          <Part 
          key={index}
          item={item}
          feature={feature}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });


    return(
    <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>

    )
  }
}

export default PartList;
