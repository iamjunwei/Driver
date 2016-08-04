/**
 * Created by xiajw on 16/8/3.
 */
import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import Styles from "./styles";

export default class QuestionBottomMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.questionBottomMenu}>
                <View style={Styles.flex1RowVCenter}>
                    <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                    <Text style={Styles.questionBottomMenuFavouriteText}>收藏</Text>
                </View>
                <View style={Styles.flex1RowVCenter}>
                    <View style={Styles.flex1RowVCenter}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.correct}</Text>
                    </View>
                    <View style={Styles.flex1RowVCenter}>
                        <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.wrong}</Text>
                    </View>
                </View>
                <View style={Styles.flex1RowVCenter}>
                    <Image source={require("../image/app_logo.png")} style={Styles.questionBottomMenuFavourite}/>
                    <Text
                        style={Styles.questionBottomMenuFavouriteText}>{this.props.currentPage}/{this.props.totalPage}</Text>
                </View>
            </View>
        );
    }

}

QuestionBottomMenu.propTypes = {
    currentPage: React.PropTypes.number,
    totalPage: React.PropTypes.number,
    correct: React.PropTypes.number,
    wrong: React.PropTypes.number,
};
QuestionBottomMenu.defaultProps = {
    currentPage: 0,
    totalPage: 0,
    correct: 0,
    wrong: 0,
};