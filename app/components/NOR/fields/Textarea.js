import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
import { activeTextColor, inactiveTextColor } from './../../../styles/colors';
const padding = 30;
const clearIconSize = 30;
export default class NORTextfield extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <BlurView blurType='light' style={norStyles.inlineField}>
                <Text style={norStyles.label}>{this.state.text != '' ? this.props.field.title : ''}</Text>
                <View style={norStyles.inlineMain}>
                    <TextInput
                        multiline={true}
                        placeholder={this.props.field.title}
                        placeholderTextColor={inactiveTextColor}
                        style={{
                            color: activeTextColor,
                            fontSize: 30,
                            height: Math.max(200, this.state.height),
                            flex: 1
                        }}
                        onChangeText={(text) => {
                            this.setState({ text: text });
                        }}
                        onEndEditing={(text) => {
                            this.props.callbackFromParent(text);
                        }}
                        onContentSizeChange={(e) => this.setState({ height: e.nativeEvent.contentSize.height })}
                        value={this.state.text} />
                    {this.state.text != '' && <Icon
                        name='clear'
                        style={norStyles.icon}
                        onPress={() => {
                            this.setState({ text: '' });
                        }} />}
                </View>
            </BlurView >
        );
    }
}
