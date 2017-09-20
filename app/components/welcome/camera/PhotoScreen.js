import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picture } from './../../../util/Badge'
export default class PhotoScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('PhotoScreen');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <BlurView blurType='light' style={{ padding: 20, borderWidth: 2 }}>
                    <TouchableOpacity onPress={() => this.props.navigate('Camera', { callback: () => { this.forceUpdate() } })}>
                        {Picture.getPicturePath() ?
                            <Image
                                style={{
                                    width: 400,
                                    height: 400,
                                    borderWidth: 2,
                                    justifyContent: 'flex-end',
                                }}
                                source={{ uri: Picture.getPicturePath() }}>
                                <View style={{ backgroundColor: 'transparent', padding: 10 }}>
                                    <Icon
                                        name='camera-alt'
                                        style={{
                                            color: 'white',
                                            fontSize: 70,
                                            shadowColor: 'black',
                                            shadowOpacity: .5,
                                            shadowRadius: 10
                                        }} />
                                </View>
                            </Image>
                            : <Icon style={{ color: 'white', padding: 100, backgroundColor: '#00000044' }} name='person' size={200} />}
                    </TouchableOpacity>
                </BlurView>
            </View >
        );
    }
}