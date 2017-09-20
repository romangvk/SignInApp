import React, { Component } from 'react';
import NORTextfield from './Textfield';

export default class NORPassword extends Component {
    render() {
        return (
            <NORTextfield
                {...this.props}
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={true}
            />
        );
    }
}