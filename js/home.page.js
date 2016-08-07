/**
 * Created by xiajw on 2016/8/6.
 */
import React, {Component} from "react";
import {View, Text, TouchableOpacity, TouchableHighlight} from "react-native";
import Styles from "./styles";
import PageHeader from "./page.header";
import TabViewPager from "./tab.viewpager";
import FetchData from "./fetchData";
import LoadingMask from "./loadingmask";

const subjects = ["科目一", "科目四"];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: "C1",
            isLoading: false,
        };
        this.subject = "1";
    }

    render() {
        return (
            <View style={Styles.root}>
                <LoadingMask isLoading={this.state.isLoading}/>
                <PageHeader
                    title={<Text style={Styles.pageHeaderContentText}>驾考题库</Text>}/>
                <TabViewPager
                    tabs={subjects}
                    views={this.renderViews()}
                    onTabChange={this.onTabChange}
                />
            </View>
        )
    }

    renderViews = () => {
        let views = [];
        for (var i = 0; i < subjects.length; i++) {
            let view = (
                <View style={Styles.root}>
                    <View style={[Styles.modelTabContainer, {marginTop: 20}]}>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("C1"), borderTopWidth: 1}]}
                            onPress={() => {
                                this.selectModel("C1")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("C1")}]}>C1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("C2"), borderTopWidth: 1}]}
                            onPress={() => {
                                this.selectModel("C2")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("C2")}]}>C2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("A1"), borderTopWidth: 1}]}
                            onPress={() => {
                                this.selectModel("A1")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("A1")}]}>A1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.modelTabContainer}>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("A2")}]}
                            onPress={() => {
                                this.selectModel("A2")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("A2")}]}>A2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("B1")}]}
                            onPress={() => {
                                this.selectModel("B1")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("B1")}]}>B1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Styles.modelTab, {backgroundColor: this.getModelColor("B2")}]}
                            onPress={() => {
                                this.selectModel("B2")
                            }}>
                            <Text
                                style={[Styles.modelTabContentUnSelect, {color: this.getModelContentColor("B2")}]}>B2</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableHighlight
                        style={[Styles.startAnswerBtn, {backgroundColor: '#099fde'}]}
                        onPress={this.startAnswer}
                        activeOpacity={1}
                        underlayColor={"rgb(14, 96, 177)"}>
                        <View style={Styles.startAnswerBtn}>
                            <Text style={Styles.startAnswerBtnText}>开始答题</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
            views.push(view);
        }
        return views;
    }

    onTabChange = (i) => {
        if (i == 0) {
            this.subject = "1";
        } else {
            this.subject = "4";
        }
    }

    selectModel = (model) => {
        this.setState({
            model: model
        });
    }

    getModelColor = (model) => {
        if (this.state.model == model) {
            return "#099fde";
        } else {
            return "#efeff4";
        }
    }

    getModelContentColor = (model) => {
        if (this.state.model == model) {
            return "white";
        } else {
            return "#333333";
        }
    }

    startAnswer = () => {
        this.setState({
            isLoading: true,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.isLoading && this.state.isLoading) {
            FetchData.fetch(this.subject, this.state.model, "rand", (questions) => {
                this.setState({
                    isLoading: false,
                });
                this.props.navigator.push({
                    index: 1,
                    data: questions,
                });
            }, (e) => {
            });
        }
    }
}

HomePage.propTypes = {
    navigator: React.PropTypes.any.isRequired,
};