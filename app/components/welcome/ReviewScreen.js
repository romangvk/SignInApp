import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BadgePreview from './../BadgePreview';
import { SubmitForm } from './../../util/NORService';
import { CreateBadge, PrintBadge } from './../../util/Badge';
export default class ReviewScreen extends Component {
    submitDataAndPrintBadge = () => {
        //this.submitData(this.formData);
        this.createAndPrintBadge();
    }
    submitData(data) {
        SubmitForm('user1', 'Pa55w0rd!', data).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }
    async createAndPrintBadge() {
        CreateBadge().then((file) => {
            PrintBadge(file).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <BadgePreview />
                <TouchableOpacity style={{ height: 40, alignItems: 'center' }} onPress={() => { this.submitDataAndPrintBadge() }}>
                    <Text style={{ color: 'white', fontSize: 20, backgroundColor: 'transparent' }}>Submit and Print Badge</Text>
                </TouchableOpacity>
            </View>
        );
    }
}