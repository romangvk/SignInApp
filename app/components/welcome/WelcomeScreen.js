import { Button, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NORForm from './../NOR/NORForm';
import { Pages } from 'react-native-pages';
import PhotoScreen from './camera/PhotoScreen';
import StartScreen from './StartScreen';
import BadgePreview from './../BadgePreview';
import ReviewScreen from './ReviewScreen';
import { SubmitForm } from './../../util/NORService';
import { CreateBadge, PrintBadge } from './../../util/Badge';

export default class WelcomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <Image source={{ uri: 'https://farm6.staticflickr.com/5564/14775211410_42b8d244da_o_d.jpg' }} style={{ flex: 1 }}>
                <Pages indicatorPosition='bottom' style={{ flex: 1 }} indicatorColor="black" >
                    <StartScreen navigate={navigate} />
                    <NORForm callbackFromParent={this.updateDataFromNORForm} />
                    <PhotoScreen navigate={navigate} />
                    <ReviewScreen />
                </Pages>
            </Image>
        );
    }
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'purple',
    },
    pageStartContainer: {
        flex: 1,
    },
    pageWelcomeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        padding: 30
    },
    contentContainer: {
        flex: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imageContentContainer: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
        height: 300,
        width: 300,
    },
    imageContainer: {
        flex: 2,
        backgroundColor: 'orange',
        alignSelf: 'stretch',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
    },
    cameraButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
    },
    userPhoto: {
        flex: 1,
        alignSelf: 'stretch'
    },
    avatarPhoto: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
    },
    welcomeFooter: {
        flex: 1,
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
        backgroundColor: 'blue',
        flexDirection: 'column',
        marginBottom: 20,
        alignItems: 'center',
    }
});