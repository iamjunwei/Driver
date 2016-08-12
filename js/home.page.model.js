/**
 * Created by xiajw on 2016/8/12.
 */
import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import Styles from './styles';
import IconIonicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HomePageModelView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: "C1",
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={[Styles.modelTabContainer]}>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("C1")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("C1")}]}>
                            <IconIonicons name="md-car" size={22} color={this.getModelContentColor("C1")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("C1")}]}>C1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("C2")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("C2")}]}>
                            <IconIonicons name="ios-car" size={20} color={this.getModelContentColor("C2")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("C2")}]}>C2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.modelTabContainer}>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("A1")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("A1")}]}>
                            <Icon name="car" size={16} color={this.getModelContentColor("A1")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("A1")}]}>A1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("A2")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("A2")}]}>
                            <Icon name="bus" size={16} color={this.getModelContentColor("A2")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("A2")}]}>A2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.modelTabContainer}>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("B1")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("B1")}]}>
                            <Icon name="truck" size={20} color={this.getModelContentColor("B1")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("B1")}]}>B1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.modelTab]}
                        onPress={() => {
                            this.selectModel("B2")
                        }}>
                        <View style={[Styles.modelTabInner, {borderWidth: this.getModelBorderWidth("B2")}]}>
                            <IconIonicons name="ios-bus" size={24} color={this.getModelContentColor("B2")}/>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("B2")}]}>B2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    selectModel = (model) => {
        this.props.onModelChange && this.props.onModelChange(this.props.subject, model);
        this.setState({
            model: model
        });
    }

    getModelBorderWidth = (model) => {
        if (this.state.model == model) {
            return 1;
        } else {
            return 0;
        }
    }

    getModelContentColor = (model) => {
        return "#099fde";
    }
}

HomePageModelView.propTypes = {
    subject: React.PropTypes.string.isRequired,
    onModelChange: React.PropTypes.func.isRequired,
};

HomePageModelView.defaultProps = {
    subject: "C1",
};