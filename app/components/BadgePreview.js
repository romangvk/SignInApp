import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge, Picture } from './../util/Badge';
import { backgroundColor } from '../styles/colors';
export default class BadgePreview extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.forceUpdate()}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: .5 }} />
                    <View style={{
                        flex: 1, aspectRatio: .6, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', shadowColor: 'black',
                        shadowOpacity: .1,
                        shadowRadius: 20,
                    }}>
                        {Badge.getBadge().map((item, i) => {
                            return <Text key={i}>{item.value ? item.value : item.name}</Text>;
                        })}
                        {Picture.getPicturePath() ?
                            <Image style={{ width: '50%', aspectRatio: 1 }} source={{ uri: Picture.getPicturePath() }} /> :
                            <View style={{ width: '50%', aspectRatio: 1, backgroundColor: '#dddddd', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon color='white' name='person' size={100} />
                            </View>}
                        <Text>{(new Date()).toDateString()}</Text>
                    </View>
                    <View style={{ flex: .5 }} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}