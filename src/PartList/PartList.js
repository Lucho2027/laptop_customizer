import React, { Component } from 'react';
import'./PartList.css';
import PartListOptions from './PartListOptions/PartListOptions'



class PartList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
        
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{features}</h3>
              </legend>
              <PartListOptions/>
            </fieldset>
          );
        });
    

}
} 

export default PartList;
