import React, { Component } from 'react';
import { Text, View, ScrollView, Button, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
import { activeTextColor, inactiveTextColor } from './../../../styles/colors';
export default class NORDropdown extends Component {
    constructor(props) {
        super(props);
        this.original = null;
        this.state = { modalVisible: false };
    }
    render() {
        return (
            <View>
                <View>
                    <BlurView blurType='light' style={norStyles.inlineField}>
                        <Text style={norStyles.label}>{this.state.option ? this.props.field.title : ''}</Text>
                        <TouchableOpacity onPress={() => {
                            this.original = this.state.option;
                            this.setState({ modalVisible: true });
                        }}>
                            <View style={norStyles.inlineMain}>
                                <Text
                                    style={{
                                        color: this.state.option ? activeTextColor : inactiveTextColor,
                                        fontSize: 20,
                                        flex: 1
                                    }}>{(this.state.option ? this.state.option.displayText : null) || this.props.field.title}</Text>
                                {this.state.option ?
                                    <Icon
                                        name='clear'
                                        style={norStyles.icon}
                                        onPress={() => {
                                            this.setState({ option: null });
                                        }} /> :
                                    <Icon
                                        name='arrow-drop-down'
                                        style={norStyles.icon} />}
                            </View>
                        </TouchableOpacity>
                    </BlurView>
                </View>
                <Modal
                    animationType='none'
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <TouchableWithoutFeedback onPress={() => { this.setState({ modalVisible: false }) }}>
                        <View style={norStyles.modalOverlay}>
                            <BlurView blurType='xlight' style={norStyles.modalGroup}>
                                <ScrollView>
                                    {this.props.field.options.sort((a, b) => {
                                        if (a.position < b.position)
                                            return -1;
                                        if (a.position > b.position)
                                            return 1;
                                        return 0;
                                    }).map((option, i) => {
                                        return (
                                            <TouchableOpacity key={i}
                                                onPress={() => {
                                                    this.setState({ modalVisible: false, option: option });
                                                }}>
                                                <View style={norStyles.modalItem}>
                                                    <Text style={norStyles.text}>{option.displayText}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </BlurView>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View >
        );
    }
}