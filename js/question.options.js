/**
 * Created by xiajw on 16/8/3.
 */
import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import Styles from "./styles";
import Answer from "./answer";

export default class QuestionOptions extends Component {
    constructor(props) {
        super(props);
        let activeOpacity = 0.2;
        if (this.props.data.hasChoose) {
            activeOpacity = 1;
        }
        this.state = {
            selectA: this.props.data.selectA,
            selectB: this.props.data.selectB,
            selectC: this.props.data.selectC,
            selectD: this.props.data.selectD,
            activeOpacity: activeOpacity,
        }

    }

    render() {
        let item3 = null;
        let item4 = null;
        if (!this.props.data.isJudge) {
            item3 = (
                <TouchableOpacity style={Styles.questionItem} activeOpacity={this.state.activeOpacity} onPress={() => {
                    this.selectAnswer(3)
                }}>
                    <View
                        style={[Styles.questionItem, {backgroundColor: this.optionBackground(3)}]}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionItemIcon}/>
                        <Text style={Styles.questionItemText}>{this.props.data.item3}</Text>
                    </View>
                </TouchableOpacity>
            );
            item4 = (
                <TouchableOpacity style={Styles.questionItem} activeOpacity={this.state.activeOpacity} onPress={() => {
                    this.selectAnswer(4)
                }}>
                    <View
                        style={[Styles.questionItem, {backgroundColor: this.optionBackground(4)}]}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionItemIcon}/>
                        <Text style={Styles.questionItemText}>{this.props.data.item4}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View style={{flex: 1, backgroundColor: "#efeff4"}}>
                <TouchableOpacity style={Styles.questionItem} activeOpacity={this.state.activeOpacity} onPress={() => {
                    this.selectAnswer(1)
                }}>
                    <View
                        style={[Styles.questionItem, {backgroundColor: this.optionBackground(1)}]}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionItemIcon}/>
                        <Text style={Styles.questionItemText}>{this.props.data.item1}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.questionItem} activeOpacity={this.state.activeOpacity} onPress={() => {
                    this.selectAnswer(2)
                }}>
                    <View
                        style={[Styles.questionItem, {backgroundColor: this.optionBackground(2)}]}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionItemIcon}/>
                        <Text style={Styles.questionItemText}>{this.props.data.item2}</Text>
                    </View>
                </TouchableOpacity>
                {item3}
                {item4}
            </View>
        );
    }

    selectAnswer(answer) {
        if (this.props.data.hasChoose) {
            return;
        }
        this.props.onSelectAnswer && this.props.onSelectAnswer(answer);
        if (answer == 1) {
            this.setState({selectA: !this.state.selectA, activeOpacity: 1});
        } else if (answer == 2) {
            this.setState({selectB: !this.state.selectB, activeOpacity: 1});
        } else if (answer == 3) {
            this.setState({selectC: !this.state.selectC, activeOpacity: 1});
        } else if (answer == 4) {
            this.setState({selectD: !this.state.selectD, activeOpacity: 1});
        }
    }

    optionBackground(answer) {
        let answerType = Answer.getAnswerType(this.props.data);
        if (answerType == 0) {
            if (answer == 1) {
                return this.state.selectA ? "#00ff00ff" : "#00ff0000";
            } else if (answer == 2) {
                return this.state.selectB ? "#00ff00ff" : "#00ff0000";
            } else if (answer == 3) {
                return this.state.selectC ? "#00ff00ff" : "#00ff0000";
            } else {
                return this.state.selectD ? "#00ff00ff" : "#00ff0000";
            }
        } else if (answerType == 1) {
            if (answer == 1) {
                return this.props.data.selectA ? "#00ff00ff" : "#00ff0000";
            } else if (answer == 2) {
                return this.props.data.selectB ? "#00ff00ff" : "#00ff0000";
            } else if (answer == 3) {
                return this.props.data.selectC ? "#00ff00ff" : "#00ff0000";
            } else {
                return this.props.data.selectD ? "#00ff00ff" : "#00ff0000";
            }
        } else {
            let resultAnswer = Answer.getResultAnswer(this.props.data);
            if (answer == resultAnswer) {
                return "#00ff00ff";
            } else {
                if (answer == 1) {
                    return this.props.data.selectA ? "#ff0000ff" : "#00ff0000";
                } else if (answer == 2) {
                    return this.props.data.selectB ? "#ff0000ff" : "#00ff0000";
                } else if (answer == 3) {
                    return this.props.data.selectC ? "#ff0000ff" : "#00ff0000";
                } else {
                    return this.props.data.selectD ? "#ff0000ff" : "#00ff0000";
                }
            }
        }
    }

}
