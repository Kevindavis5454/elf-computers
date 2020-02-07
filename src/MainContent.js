import React, { Component } from 'react';
import CartDisplay from "./CartDisplay";
import CartTotal from "./CartTotal";

class MainForm extends Component {
    render () {

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartDisplay selected={this.props.selected} USCurrencyFormat= {this.props.USCurrencyFormat} />
                <CartTotal selected={this.props.selected} USCurrencyFormat= {this.props.USCurrencyFormat} />
            </section>

        )}
}

export default MainForm