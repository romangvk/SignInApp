import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Pages } from 'react-native-pages';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import FloatLabelTextField from 'rn-flabel-textfield';
import { GetForm } from './../../util/NORService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NORField from './NORField';
import NORHeader from './NORHeader';
import { Badge } from './../../util/Badge';
import norStyles from './../../styles/nor-styles';
import { backgroundColor } from './../../styles/colors';
export default class NORForm extends Component {
    constructor(props) {
        super(props);
        this.form = 'init';
        this.badge = {};
        this.state = { loaded: false };
    }
    componentDidMount() {
        GetForm('user1', 'Pa55w0rd!', 'cd3f3777-25a0-4b76-b404-66d19cafc119').then((form) => {
            this.form = form.formVersions[0];
            this.setState({ loaded: true });
        }).catch((err) => { console.log(err) });
    }
    render() {
        return this.state.loaded ? (
            <View style={{ flex: 1, padding: 30 }}>
                <Text style={norStyles.formTitle}>{this.form.displayName}</Text>
                <Pages horizontal={false}>
                    {this.form.sections.sort((a, b) => {
                        if (a.position < b.position)
                            return -1;
                        if (a.position > b.position)
                            return 1;
                        return 0;
                    }).map((section, i) => {
                        return (
                            <KeyboardAwareScrollView key={i} contentContainerStyle={{
                                flexGrow: 1,
                                justifyContent: 'center',
                                padding: 10
                            }}>
                                <Text style={norStyles.sectionTitle}>{section.sectionName}</Text>
                                {section.fields.sort((a, b) => {
                                    if (a.position < b.position)
                                        return -1;
                                    if (a.position > b.position)
                                        return 1;
                                    return 0;
                                }).map((field, j) => {
                                    Badge.init(field.id, field.title);
                                    var component =
                                        <NORField
                                            field={field}
                                            callbackFromParent={(value) => {
                                                field.value = value;
                                                Badge.updateBadgeData(field.id, value);
                                            }} />;
                                    return (
                                        <View key={j}>
                                            {this.props.fieldContainer ?
                                                this.props.fieldContainer(component, field) : component
                                            }
                                        </View>
                                    );
                                })}
                            </KeyboardAwareScrollView>
                        );
                    })}
                </Pages>
            </View>
        ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator style={{ alignItems: 'center', justifyContent: 'center' }} />
                </View>
            );
    }
}
