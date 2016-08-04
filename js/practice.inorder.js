/**
 * Created by xiajw on 2016/8/1.
 */
import React, {Component} from "react";
import {View, ScrollView, Text, Image, Dimensions} from "react-native";
import ViewPager from "react-native-viewpager";
import LoadingView from "./loadingview";
import Styles from "./styles";
import FetchData from "./fetchData";
import QuestionOptions from "./question.options";
import QuestionBottomMenu from "./question.buttom.menu";
import Answer from "./answer";

const ScreenSize = Dimensions.get("window");

export default class PracticeInOrder extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this.state = {
            data: [],
            isLoading: true,
            currentPage: 1,
            correct: 0,
            wrong: 0,
        }
        FetchData.fetch("1", "c1", "rand", (questions) => {
            let tempSelect = [];
            for (let i = 0; i < questions.length; i++) {
                tempSelect.push([false, false, false, false]);
            }
            this.setState({
                data: questions,
                isLoading: false,
            });
        }, (e) => {
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <LoadingView isLoading={this.state.isLoading}/>
                <ViewPager
                    ref="viewPager"
                    style={{flex: 1}}
                    dataSource={this.dataSource.cloneWithPages(this.state.data)}
                    renderPage={this.renderPage}
                    renderPageIndicator={()=> {
                        return <View/>
                    }}
                    onChangePage={this.onChangePage}
                />
                <QuestionBottomMenu
                    currentPage={this.state.currentPage}
                    totalPage={this.state.data.length}
                    correct={this.state.correct}
                    wrong={this.state.wrong}
                />
            </View>
        );
    }

    renderPage = (data, pageID) => {
        let questionImage = null;
        if (data.url != "") {
            questionImage = (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={{uri: data.url}}
                        style={[Styles.questionImage, {height: 100, width: ScreenSize.width - 40}]}
                        resizeMode={"contain"}/>
                </View>
            );
        }
        return (
            <View style={{flex: 1, backgroundColor: "#efeff4"}}>
                <ScrollView>
                    <Text style={Styles.questionText}>{data.question}</Text>
                    {questionImage}
                    <QuestionOptions
                        data={data}
                        onSelectAnswer={(answer) => {
                            if (answer == 1) {
                                data.selectA = !data.selectA;
                            } else if (answer == 2) {
                                data.selectB = !data.selectB;
                            } else if (answer == 3) {
                                data.selectC = !data.selectC;
                            } else if (answer == 4) {
                                data.selectD = !data.selectD;
                            }
                            data.hasChoose = true;
                            if (Answer.isQuestionCorrect(data)) {
                                this.selectCorrect();
                            } else {
                                this.selectWrong();
                            }
                        }}
                    />
                </ScrollView>
            </View>
        );
    }

    onChangePage = (page) => {
        this.setState({
            currentPage: page + 1,
        })
    }

    selectCorrect = () => {
        this.setState({correct: this.state.correct + 1});
    }

    selectWrong = () => {
        this.setState({wrong: this.state.wrong + 1});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.correct != prevState.correct) {
            this.refs.viewPager.goToPage(this.state.currentPage, true);
        }
    }

}