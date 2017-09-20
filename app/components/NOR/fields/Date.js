import React, { Component } from 'react';
import { View, Button, Text, Modal, TouchableWithoutFeedback, TouchableOpacity, DatePickerIOS, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import norStyles from './../../../styles/nor-styles';
import { BlurView } from 'react-native-blur';
import {activeTextColor, inactiveTextColor} from './../../../styles/colors';
export default class NORDate extends Component {
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
                        <Text style={norStyles.label}>{this.state.date ? this.props.field.title : ''}</Text>
                        <TouchableOpacity onPress={() => {
                            this.original = this.state.date;
                            this.setState({ modalVisible: true });
                        }}>
                            <View style={norStyles.inlineMain}>
                                <Text
                                    style={{
                                        color: this.state.date ? activeTextColor : inactiveTextColor,
                                        fontSize: 20,
                                        flex: 1
                                    }}>{(this.state.date ? this.state.date.toDateString() : null) || this.props.field.title}</Text>
                                {this.state.date ?
                                    <Icon
                                        name='event-busy'
                                        style={norStyles.icon}
                                        onPress={() => {
                                            this.setState({ date: null });
                                        }} /> :
                                    <Icon
                                        name='event'
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
                                <DatePickerIOS
                                    mode='date'
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                    date={this.state.date || new Date} />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => {
                                            this.props.callbackFromParent(this.original);
                                            this.setState({ date: this.original, modalVisible: false });
                                        }}>
                                        <View style={norStyles.modalItem}>
                                            <Text style={norStyles.text}>Cancel</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => {
                                            this.props.callbackFromParent(this.state.date);
                                            this.setState({ modalVisible: false });
                                        }}>
                                        <View style={norStyles.modalItem}>
                                            <Text style={norStyles.text}>Ok</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </BlurView>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View >
        );
    }
}