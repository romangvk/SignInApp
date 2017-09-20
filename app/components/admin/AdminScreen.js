import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import GeneralScreen from './GeneralScreen';
import BadgeScreen from './BadgeScreen';
import FieldsScreen from './FieldsScreen';
import FormsScreen from './FormsScreen';
import VisitorTypesScreen from './VisitorTypesScreen';
import NORForm from './../NOR/NORForm';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screens = [
    { key: 0, name: 'General', screen: GeneralScreen },
    { key: 1, name: 'Fields', screen: FieldsScreen },
    { key: 2, name: 'Forms', screen: FormsScreen },
    { key: 3, name: 'Visitor Types', screen: VisitorTypesScreen },
    { key: 4, name: 'Badge', screen: BadgeScreen },
];
export default class AdminScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: screens[0]
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 70,
                    padding: 15,
                    paddingTop: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'firebrick'
                }}>
                    <Icon name='keyboard-arrow-left' size={40} color='white' onPress={() => { this.props.navigation.goBack() }} />
                    <Text style={{ fontSize: 15, color: 'white' }}>Options</Text>
                    <View style={{ width: 40 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginLeft: 40, flex: 0 }}>
                        {screens.map((screen, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => {
                                        this.setState({ screen: screen });
                                    }}>
                                    <View style={{
                                        backgroundColor: this.state.screen.key == i ? 'firebrick' : 'transparent',
                                        width: 170,
                                        padding: 20,
                                        borderRadius: 20,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: this.state.screen.key == i ? 'white' : 'black'
                                        }}>{screen.name}</Text>
                                        {this.state.screen.key == i && <Icon name='keyboard-arrow-right' size={15} color='white' />}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <View style={{
                        borderRadius: 25,
                        padding: 30,
                        flex: 1, margin: 50, shadowColor: 'black', shadowOpacity: .1,
                        shadowRadius: 20
                    }}>
                        <this.state.screen.screen />
                    </View>
                </View>
            </View >
        );
    }
}