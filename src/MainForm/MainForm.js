import React, { Component } from 'react';
import Options from "./Options/Options";

class MainContent extends Component {
    render () {

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options selected={this.props.selected} USCurrencyFormat= {this.props.USCurrencyFormat}  features={this.props.features} updateFeature={this.props.updateFeature} />
        </form>

)}
}

export default MainContent