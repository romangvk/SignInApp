import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { activeTextColor, inactiveTextColor } from './../../../styles/colors';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
export default class NORTextfield extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <BlurView blurType='light' style={norStyles.field}>
                    <TouchableWithoutFeedback onPress={() => {
                        this.props.callbackFromParent(!this.state.checked);
                        this.setState({ checked: !this.state.checked });
                    }}>
                        <View style={norStyles.item}>
                            <Icon name={this.state.checked ? 'check-box' : 'check-box-outline-blank'}
                                color={this.state.checked ? activeTextColor : inactiveTextColor}
                                style={norStyles.icon} />
                            <Text style={[norStyles.text, { color: this.state.checked ? activeTextColor : inactiveTextColor }]}> {this.props.field.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </BlurView>
                <View style={{ flex: 1 }} />
            </View >
        );
    }
}