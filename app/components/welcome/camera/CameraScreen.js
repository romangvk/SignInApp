import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picture } from './../../../util/Badge'

export default class CameraScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect='fill'
                    type='front'
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    captureQuality='480p'
                    mirrorImage={true}
                    fixOrientation={true}>
                    <Icon style={{ flex: 1, alignSelf: 'flex-start', marginTop: 20, backgroundColor: 'transparent' }} name='keyboard-arrow-left' color='white' size={70} onPress={() => this.props.navigation.goBack()} />
                    <Icon style={styles.capture} name='camera' backgroundColor='transparent' size={60} color='white' onPress={this.takePicture.bind(this)}></Icon>
                </Camera>
            </View>
        )
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({ metadata: options })
            .then((data) => {
                Picture.updatePicturePath(data.path);
                this.props.navigation.state.params.callback();
                this.props.navigation.goBack();
            }).catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        borderRadius: 5,
        marginBottom: 40,
        backgroundColor: 'transparent'
    }
});