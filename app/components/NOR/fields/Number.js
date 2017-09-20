import React, { Component } from 'react';
import NORTextfield from './Textfield';

export default class NORNumber extends Component {
    render() {
        return (
            <NORTextfield
                {...this.props}
                placeholder={this.props.field.title}
                keyboardType='phone-pad'
            />
        );
    }
}