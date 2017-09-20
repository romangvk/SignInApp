import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NORForm from './../NOR/NORForm';
import BadgePreview from './../BadgePreview';
import { Badge, Picture } from './../../util/Badge';
import { GetForm } from './../../util/NORService';

export default class BadgeScreen extends Component {
    constructor(props) {
        super(props);
        this.form = 'init';
        this.state = {}
    }
    formFieldsList() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Change items on the badge.</Text>
                <ScrollView style={{ flex: 1 }}>
                    <Text>{this.form.displayName}</Text>
                    {this.form.sections.sort((a, b) => {
                        if (a.position < b.position)
                            return -1;
                        if (a.position > b.position)
                            return 1;
                        return 0;
                    }).map((section, i) => {
                        return (
                            <View key={i} style={{ margin: 10 }}>
                                <Text>{section.sectionName}</Text>
                                {section.fields.sort((a, b) => {
                                    if (a.position < b.position)
                                        return -1;
                                    if (a.position > b.position)
                                        return 1;
                                    return 0;
                                }).map((field, j) => {
                                    return (
                                        <TouchableWithoutFeedback key={j} onPress={() => {
                                            Badge.toggleBadgeData(field.id);
                                            this.forceUpdate();
                                        }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                                <Icon name={Badge.isOnBadge(field.id) ? 'check-box' : 'check-box-outline-blank'} size={30} color='black' />
                                                <Text style={{ padding: 10 }}>{field.title}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    );
                                })}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
    componentDidMount() {
        GetForm('user1', 'Pa55w0rd!', 'cd3f3777-25a0-4b76-b404-66d19cafc119').then((form) => {
            this.form = form.formVersions[0];
            this.setState({ loaded: true });
        });
    }
    render() {
        console.log('BadgeMaker');
        return this.state.loaded ? (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this.formFieldsList()}
                    <BadgePreview />
                </View>
            </View>
        ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
    }
}
