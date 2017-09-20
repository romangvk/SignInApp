import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
import SignaturePad from 'react-native-signature-pad';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class NORSignature extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, signature: null, done: false };
    }
    render() {
        return (
            <BlurView blurType={this.state.open && !this.state.signature ? 'xlight' : 'light'} style={norStyles.inlineField}>
                <Text style={norStyles.label}>{this.state.open ? this.props.field.title : ''}</Text>
                {this.state.open ?
                    <View style={norStyles.inlineMain}>
                        {<Icon
                            name='clear'
                            style={norStyles.icon}
                            onPress={() => {
                                this.setState({ open: false, signature: null });
                            }} />}
                        <SignaturePad
                            onChange={(image) => { this.setState({ signature: image }) }}
                            style={{ height: 200, flex: 1, backgroundColor: 'transparent' }} />
                        {this.state.signature != null && <Icon
                            name='check'
                            style={norStyles.icon}
                            color='green'
                            onPress={() => {
                                this.setState({ done: true });
                            }} />}
                    </View>
                    :
                    <TouchableWithoutFeedback onPress={() => this.setState({ open: true })}>
                        <View style={norStyles.inlineMain}>
                            <Text style={{ fontSize: 20, flex: 1 }}>{this.props.field.title}</Text>
                            <Icon
                                name='create'
                                style={norStyles.icon} />
                        </View>
                    </TouchableWithoutFeedback>
                }
            </BlurView >
        );
    }
}