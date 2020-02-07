import React, { Component } from 'react';
import Features from './Features'

class MainForm extends Component {


    render () {

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features selected={this.props.selected} USCurrencyFormat= {this.props.USCurrencyFormat}  features={this.props.features} updateFeature={this.props.updateFeature} />
            </form>

)}
}

export default MainForm