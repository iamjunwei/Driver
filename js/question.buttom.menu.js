/**
 * Created by xiajw on 16/8/3.
 */
import React, {Component} from "react";
import {View, Text, Image, TouchableHighlight} from "react-native";
import Styles from "./styles";

export default class QuestionBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        };
    }

    render() {
        return (
            <TouchableHighlight
                style={{backgroundColor: "white"}}
                activeOpacity={1}
                underlayColor={"#c8c8c8"}
                onPress={() => {
                    this.props.showMenu && this.props.showMenu();
                }}>
                <View style={Styles.questionBottomMenu}>
                    <View style={Styles.flex1RowVCenter}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>收藏</Text>
                    </View>
                    <View style={Styles.flex1RowVCenter}>
                        <View style={Styles.flex1RowVCenter}>
                            <Image source={require("../image/app_logo.png")}
                                   style={Styles.questionBottomMenuFavourite}/>
                            <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.correct}</Text>
                        </View>
                        <View style={Styles.flex1RowVCenter}>
                            <Image source={require("../image/app_logo.png")}
                                   style={Styles.questionBottomMenuFavourite}/>
                            <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.wrong}</Text>
                        </View>
                    </View>
                    <View style={Styles.flex1RowVCenter}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                        <Text
                            style={Styles.questionBottomMenuFavouriteText}>{this.state.currentPage}/{this.props.totalPage}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page});
    }

}

QuestionBottomMenu.propTypes = {
    totalPage: React.PropTypes.number,
    correct: React.PropTypes.number,
    wrong: React.PropTypes.number,
    showMenu: React.PropTypes.func,
};
QuestionBottomMenu.defaultProps = {
    totalPage: 0,
    correct: 0,
    wrong: 0,
};