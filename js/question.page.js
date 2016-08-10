/**
 * Created by xiajw on 2016/8/1.
 */
import React, {Component} from "react";
import {View, ScrollView, Text, Image, Dimensions, Modal, Alert} from "react-native";
import Styles from "./styles";
import ViewPager from "react-native-viewpager";
import QuestionOptions from "./question.options";
import QuestionBottomMenu from "./question.buttom.menu";
import Answer from "./answer";
import PageHeader from "./page.header";
import BottomFloatMenu from "./bottom.float.menu";
import IconEntypo from "react-native-vector-icons/Entypo";
import SaveRecord from "./save.record";
import QuestionMenu from "./question.menu";

const ScreenSize = Dimensions.get("window");

export default class QuestionPage extends Component {
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
                        menuView={this.renderQuestionMenu()}
                    />
                </Modal>
                <PageHeader
                    leftButton={<IconEntypo name="chevron-left" size={30} color="white"
                                            style={Styles.pageHeaderButtonIcon}/>}
                    leftButtonClick={() => {
                        this.props.navigator.pop()
                    }}
                    title={<Text style={Styles.pageHeaderContentText}>{this.props.title}</Text>}/>
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
                    favourite={this.favourite}
                    initFavourite={this.props.data[this.currentPage - 1].isFavourite}
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

    renderQuestionMenu = () => {
        return <QuestionMenu data={this.props.data} onSelectIndex={this.onSelectIndex}/>;
    };

    onSelectIndex = (index) => {
        this.refs.bottomFloatMenu.closeMenu();
        this.currentPage = index + 1;
    }

    onChangePage = (page) => {
        this.currentPage = page + 1;
        this.refs.questionBottomMenu.updateState(this.currentPage, this.props.data[this.currentPage - 1].isFavourite);
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

    favourite = (isFavourite) => {
        this.props.data[this.currentPage - 1].isFavourite = !this.props.data[this.currentPage - 1].isFavourite;
        this.refs.questionBottomMenu.updateState(this.currentPage, this.props.data[this.currentPage - 1].isFavourite);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.correct != prevState.correct) {
            if (this.currentPage >= this.props.data.length) {
                Alert.alert("提示", "已经是最后一题了!");
            } else {
                this.refs.viewPager.goToPage(this.currentPage, true);
            }
        } else if (!this.state.menuVisible && prevState.menuVisible) {
            this.refs.viewPager.goToPage(this.currentPage - 1, false);
        }
    }

    componentWillUnmount() {
        SaveRecord.saveFavourite(this.props.data, (favourites) => {
            SaveRecord.saveWrong(this.props.data, (wrongs) => {

            });
        });
    }

}

QuestionPage.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    navigator: React.PropTypes.any.isRequired,
    title: React.PropTypes.string.isRequired,
};