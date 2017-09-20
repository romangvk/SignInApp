import React, { Component } from 'react';
import { StyleSheet, Modal, View, Button, Image, Text, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Animated } from 'react-native';
import { VibrancyView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StartScreen extends Component {
    constructor(props) {
        super(props);
        this.password = '1234';
        this.state = {
            modalVisible: false,
            entered: ''
        };
    }
    check(x) {
        console.log('check' + x)
        if (x.length == 4) {
            if (x == this.password) {
                this.setState({ modalVisible: false });
                this.props.navigate('Admin');
            }
            this.setState({ entered: '' });
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.headerContainer} >
                    <View style={styles.headerLeftButtonContainer} >
                        <Icon style={styles.headerButton} name='settings' size={44} color="black" onPress={() => { this.setState({ modalVisible: true, entered: '' }); }} />
                    </View>
                </View>
                <View style={styles.contentContainer} >
                    <Text style={styles.contentTitleText}>Swipe to Begin</Text>
                    <Modal
                        animationType='none'
                        transparent={true}
                        visible={this.state.modalVisible}>
                        <TouchableWithoutFeedback onPress={() => { this.setState({ modalVisible: false }) }}>
                            <VibrancyView blurType='dark' style={styles.modalOverlay}>
                                <View style={styles.modalTitleContainer}>
                                    <Text style={styles.modalTitleText}>Enter Password</Text>
                                </View>
                                <View style={styles.modalAdminPasswordContainer}>
                                    <View style={{ width: 80 }} />
                                    <View style={styles.modalAdminPasswordSecureEntryContainer}>
                                        {[0, 0, 0, 0].map((z, i) => {
                                            return (
                                                <Icon key={i} style={styles.modalAdminPasswordIcons} name={this.state.entered.length > i ? 'lens' : 'radio-button-unchecked'} size={20} color='white' />
                                            );
                                        })}
                                    </View>
                                    <Icon style={styles.modalAdminPasswordDeleteButton} name='backspace' size={40} color={this.state.entered != '' ? 'white' : 'black'} onPress={() => { this.setState({ entered: this.state.entered.slice(0, -1) }) }} />
                                </View>
                                {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]].map((row, i) => {
                                    return (
                                        <View key={i} style={styles.modalAdminPasswordNumberKeypad}>
                                            {row.map((k) => {
                                                return (
                                                    <TouchableOpacity key={k} onPress={() => {
                                                        var newpass = this.state.entered + '' + k;
                                                        this.setState({ entered: newpass });
                                                        this.check(newpass);
                                                    }}>
                                                        <View style={styles.pinkey}>
                                                            <Text style={{ color: 'white' }}>{k}</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                );
                                            })}
                                        </View>
                                    );
                                })}
                            </VibrancyView>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    headerLeftButtonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headerButton: {
        backgroundColor: 'transparent', 
        marginLeft: 16,
    },
    headerTitleContainer: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerTitleText: {
        fontSize: 50,
    },
    headerRightContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 11,
    },
    contentTitleText: {
        backgroundColor: 'transparent', 
        textAlign: 'center', 
        fontFamily: 'Helvetica Neue', 
        fontSize: 50,
    },
    modalGroup: {
        width: 400,
        padding: 10,
        margin: 5,
        backgroundColor: '#ddddddfe',
        borderRadius: 25
    },
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitleContainer: {
        margin: 20,
    },
    modalTitleText: {
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        color: 'white',
    },
    modalAdminPasswordContainer: {
        flexDirection: 'row',
    },
    modalAdminPasswordSecureEntryContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    modalAdminPasswordIcons: {
        margin: 20,
    },
    modalAdminPasswordDeleteButton:{ 
        margin: 20, 
        alignSelf: 'flex-end',
    },
    modalAdminPasswordNumberKeypad: {
        flexDirection: 'row',
    },
    pinkey: {
        width: 80,
        height: 80,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 40,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});