/**
 * Created by xiajw on 2016/8/1.
 */
import React, {Component} from "react";
import {View, ScrollView, Text, Image, Dimensions, Modal} from "react-native";
import Styles from "./styles";
import ViewPager from "react-native-viewpager";
import QuestionOptions from "./question.options";
import QuestionBottomMenu from "./question.buttom.menu";
import Answer from "./answer";
import PageHeader from "./page.header";
import BottomFloatMenu from "./bottom.float.menu";

const ScreenSize = Dimensions.get("window");

export default class PracticeInOrder extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this.state = {
            correct: 0,
            wrong: 0,
            menuVisible: false,
        };
        this.currentPage = 1;
    }

    render() {
        return (
            <View style={Styles.root}>
                <Modal
                    animationType={"none"}
                    transparent={true}
                    visible={this.state.menuVisible}
                    onRequestClose={() => {
                        this.refs.bottomFloatMenu.closeMenu();
                    }}>
                    <BottomFloatMenu
                        ref="bottomFloatMenu"
                        onMenuClose={() => {
                            this.setState({menuVisible: false})
                        }}
                        menuView={(
                            <ScrollView>
                                <Text>123</Text>
                                <Text>456</Text>
                            </ScrollView>
                        )}
                    />
                </Modal>
                <PageHeader
                    leftButton={<Image source={require("../image/page_header_back.png")}
                                       style={Styles.pageHeaderButtonIcon}/>}
                    leftButtonClick={() => {
                        this.props.navigator.pop()
                    }}
                    title={<Text style={Styles.pageHeaderContentText}>开始答题</Text>}/>
                <ViewPager
                    ref="viewPager"
                    style={{flex: 1}}
                    dataSource={this.dataSource.cloneWithPages(this.props.data)}
                    renderPage={this.renderPage}
                    renderPageIndicator={()=> {
                        return <View/>
                    }}
                    onChangePage={this.onChangePage}
                />
                <QuestionBottomMenu
                    ref="questionBottomMenu"
                    totalPage={this.props.data.length}
                    correct={this.state.correct}
                    wrong={this.state.wrong}
                    showMenu={this.showMenu}
                />
            </View>
        );
    }

    renderPage = (data, pageID) => {
        let questionImage = null;
        if (data.url != "") {
            questionImage = (
                <View style={Styles.centerInContainer}>
                    <Image
                        source={{uri: data.url}}
                        style={[Styles.questionImage, {height: 100, width: ScreenSize.width - 40}]}
                        resizeMode={"contain"}/>
                </View>
            );
        }
        return (
            <View style={Styles.root}>
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
        this.currentPage = page + 1;
        this.refs.questionBottomMenu.updateCurrentPage(this.currentPage);
    }

    selectCorrect = () => {
        this.setState({correct: this.state.correct + 1});
    }

    selectWrong = () => {
        this.setState({wrong: this.state.wrong + 1});
    }

    showMenu = () => {
        this.setState({
            menuVisible: true,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.correct != prevState.correct) {
            this.refs.viewPager.goToPage(this.currentPage, true);
        }
    }

}

PracticeInOrder.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    navigator: React.PropTypes.any.isRequired,
};