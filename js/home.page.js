/**
 * Created by xiajw on 2016/8/6.
 */
import React, {Component} from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import Styles from "./styles";
import PageHeader from "./page.header";
import TabViewPager from "./tab.viewpager";
import FetchData from "./fetchData";
import LoadingMask from "./loadingmask";
import SaveRecord from "./save.record";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIonicons from "react-native-vector-icons/Ionicons";

const subjects = ["科目一", "科目四"];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: "C1",
            isLoading: false,
            isReadingFavourite: false,
            isReadingWrong: false,
        };
        this.subject = "1";
        this.testType = "rand";
    }

    render() {
        return (
            <View style={Styles.root}>
                <LoadingMask
                    isLoading={this.state.isLoading || this.state.isReadingFavourite || this.state.isReadingWrong}/>
                <PageHeader
                    title={<Text style={Styles.pageHeaderContentText}>驾考题库</Text>}
                    rightButton={<Icon name="rocket" size={30} color="#900"/>}
                    rightButtonClick={() => {
                        this.props.navigator.push({index: 99})
                        SaveRecord.clearFavourite();
                        SaveRecord.clearWrong();
                    }}/>
                <View style={{flex: 1}}>
                    <TabViewPager
                        tabs={subjects}
                        views={this.renderViews()}
                        onTabChange={this.onTabChange}
                    />
                </View>
                <View style={Styles.homePageFunctionArea}>
                    <View style={Styles.homePageFunctionInOrder}>
                        <TouchableOpacity
                            style={[Styles.homePageInOrderButtonArea, {backgroundColor: 'rgb(131, 201, 25)'}]}
                            onPress={this.startAnswerInOrder}
                            activeOpacity={0.5}>
                            <Text style={Styles.homePageInOrderButton}>顺序练习</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.homePageFunctionInOrder}>
                        <TouchableOpacity
                            style={[Styles.homePageInOrderButtonArea, {backgroundColor: 'rgb(179, 112, 226)'}]}
                            onPress={this.startAnswerInExam}
                            activeOpacity={0.5}>
                            <Text style={Styles.homePageInOrderButton}>模拟考试</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.homePageFunctionInOrder}>
                        <TouchableOpacity
                            style={[Styles.homePageInOrderButtonArea, {backgroundColor: 'rgb(245, 188, 35)'}]}
                            onPress={this.goMyFavourite}
                            activeOpacity={0.5}>
                            <Text style={Styles.homePageInOrderButton}>我的收藏</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.homePageFunctionInOrder}>
                        <TouchableOpacity
                            style={[Styles.homePageInOrderButtonArea, {backgroundColor: 'rgb(254, 155, 155)'}]}
                            onPress={this.goMyWrongQuestion}
                            activeOpacity={0.5}>
                            <Text style={Styles.homePageInOrderButton}>我的错题</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderViews = () => {
        let views = [];
        for (var i = 0; i < subjects.length; i++) {
            let view = (
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

    startAnswerInOrder = () => {
        this.testType = "order";
        this.setState({
            isLoading: true,
        });
    }

    startAnswerInExam = () => {
        this.testType = "rand";
        this.setState({
            isLoading: true,
        });
    }

    goMyFavourite = () => {
        this.setState({
            isReadingFavourite: true,
        });
    }

    goMyWrongQuestion = () => {
        this.setState({
            isReadingWrong: true,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.isLoading && this.state.isLoading) {
            FetchData.fetch(this.subject, this.state.model, this.testType, (questions) => {
                SaveRecord.getFavourite((favourites) => {
                    let i = 0;
                    let j = 0;
                    while (i < favourites.length && j < questions.length) {
                        if (favourites[i].id < questions[j].id) {
                            i++;
                        } else if (favourites[i].id > questions[j].id) {
                            j++;
                        } else {
                            questions[j].isFavourite = true;
                            i++;
                            j++;
                        }
                    }
                    this.setState({
                        isLoading: false,
                    });
                    this.props.navigator.push({
                        index: 1,
                        data: questions,
                        title: this.testType == "rand" ? "模拟考试" : "顺序练习",
                    });
                })
            }, (e) => {
            });
        } else if (!prevState.isReadingFavourite && this.state.isReadingFavourite) {
            SaveRecord.getFavourite((favourites) => {
                this.setState({
                    isReadingFavourite: false,
                });
                if (favourites.length > 0) {
                    this.props.navigator.push({
                        index: 1,
                        data: favourites,
                        title: "我的收藏"
                    });
                } else {
                    Alert.alert("提示", "你还没有收藏题目哦!");
                }
            })
        } else if (!prevState.isReadingWrong && this.state.isReadingWrong) {
            SaveRecord.getWrong((wrongs) => {
                this.setState({
                    isReadingWrong: false,
                });
                if (wrongs.length > 0) {
                    this.props.navigator.push({
                        index: 1,
                        data: wrongs,
                        title: "我的错题"
                    });
                } else {
                    Alert.alert("提示", "你很厉害,目前没有错题哦!");
                }
            })
        }
    }
}

HomePage.propTypes = {
    navigator: React.PropTypes.any.isRequired,
};