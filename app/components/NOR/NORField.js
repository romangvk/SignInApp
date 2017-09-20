import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import norStyles from './../../styles/nor-styles';
import NORAttachment from './fields/Attachment';
import NORCheckbox from './fields/Checkbox';
import NORChecklist from './fields/Checklist';
import NORDate from './fields/Date';
import NORDropdown from './fields/Dropdown';
import NOREmail from './fields/Email';
import NORNumber from './fields/Number';
import NORPassword from './fields/Password';
import NORRadio from './fields/Radio';
import NORSignature from './fields/Signature';
import NORSpreadsheet from './fields/Spreadsheet';
import NORTextarea from './fields/Textarea';
import NORTextfield from './fields/Textfield';
export default class NORField extends Component {
    chooseField = () => {
        switch (this.props.field.fieldType.value) {
            // case 'attachment':
            //     return <NORAttachment field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'checkbox':
                return <NORCheckbox field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'checklist':
                return <NORChecklist field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'date':
                return <NORDate field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'dropdown':
                return <NORDropdown field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'email':
                return <NOREmail field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'number':
                return <NORNumber field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'password':
                return <NORPassword field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'radio':
                return <NORRadio field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'signature':
                return <NORSignature field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            // case 'spreadsheet':
            //     return <NORSpreadsheet field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'textarea':
                return <NORTextarea field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            case 'textfield':
                return <NORTextfield field={this.props.field} callbackFromParent={this.props.callbackFromParent} />;
            default:
                return <Text>Sorry, field type '{this.props.field.fieldType.value}' not yet supported!</Text>;
        }
    }
    render() {
        console.log(this.props.field.fieldType.value);
        return (
            <View>
                {this.chooseField()}
                {this.props.field.required ?
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                        <Icon name='error' style={[norStyles.icon, { fontSize: 20, color: 'red' }]} />
                        <Text style={{ backgroundColor: 'transparent', color: 'red' }}>This field is required.</Text>
                    </View>
                    :
                    <Text style={{ fontSize: 20, backgroundColor: 'transparent' }} />}
            </View>
        );
    }
}