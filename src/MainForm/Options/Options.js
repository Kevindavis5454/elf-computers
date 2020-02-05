import React, { Component } from 'react';
import Features from "./Features/Features";

class Options extends Component {

    render() {

        return (
            <Features selected={this.props.selected} USCurrencyFormat= {this.props.USCurrencyFormat}  features={this.props.features} updateFeature={this.props.updateFeature} />
        )
    }
}

export default Options