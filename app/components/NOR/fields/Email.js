import React, { Component } from 'react';
import NORTextfield from './Textfield';

export default class NOREmail extends Component {
    render() {
        return (
            <NORTextfield
                {...this.props}
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize='none'
            />
        );
    }
}