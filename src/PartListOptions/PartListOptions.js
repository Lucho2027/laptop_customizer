import React, { Component } from 'react';
import './PartListOptions.css';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class PartListOptions extends Component {
    render() {
       
        const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return(
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.state.selected[feature].name}
                        onChange={e => this.updateFeature(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
                </div>
            );
        })
       
    }
    PartListOptions.defaultProps ={
        feature:[]
    }
}

export default PartListOptions;