import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { activeTextColor, inactiveTextColor } from './../../../styles/colors';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
export default class NORRadio extends Component {
    constructor(props) {
        super(props);
        this.state = { option: null };
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <BlurView blurType='light'  style={norStyles.field}>
                    <Text style={norStyles.text}>{this.props.field.title}</Text>
                    {this.props.field.options.sort((a, b) => {
                        if (a.position < b.position)
                            return -1;
                        if (a.position > b.position)
                            return 1;
                        return 0;
                    }).map((option, i) => {
                        return (
                            <TouchableWithoutFeedback key={i} onPress={() => {
                                if (this.state.option === option.id) {
                                    this.props.callbackFromParent(null);
                                    this.setState({ option: null });
                                } else {
                                    this.props.callbackFromParent(this.state.option);
                                    this.setState({ option: option.id });
                                }
                            }}>
                                <View style={norStyles.listItem}>
                                    <Icon
                                        name={this.state.option === option.id ? 'radio-button-checked' : 'radio-button-unchecked'}
                                        color={this.state.option === option.id ? activeTextColor : inactiveTextColor}
                                        style={norStyles.icon} />
                                    <Text style={[norStyles.text, { color: this.state.option === option.id ? activeTextColor : inactiveTextColor }]}> {option.displayText}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </BlurView>
                <View style={{ flex: 1 }} />
            </View>
        )
    }
}