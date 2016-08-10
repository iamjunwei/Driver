/**
 * Created by xiajw on 16/8/3.
 */
import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import Styles from "./styles";
import IconEntypo from "react-native-vector-icons/Entypo";

export default class QuestionBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isFavourite: this.props.initFavourite,
        };
    }

    render() {
        return (
            <View style={Styles.questionBottomMenu}>
                <TouchableHighlight
                    style={Styles.flex1RowVCenter}
                    activeOpacity={1}
                    underlayColor={"#c8c8c8"}
                    onPress={() => {
                        this.props.favourite && this.props.favourite(this.state.isFavourite);
                    }}>
                    <View style={[Styles.flex1RowVCenter, {marginLeft: 10}]}>
                        <IconEntypo name={this.state.isFavourite ? "heart" : "heart-outlined"}
                                    size={15}
                                    color={this.state.isFavourite ? "red" : "#333333"}
                                    style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>收藏</Text>
                    </View>
                </TouchableHighlight>
                <View style={Styles.flex1RowVCenter}>
                    <View style={Styles.flex1RowVCenter}>
                        <IconEntypo name={"check"}
                                    size={15}
                                    color={"green"}
                                    style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.correct}</Text>
                    </View>
                    <View style={Styles.flex1RowVCenter}>
                        <IconEntypo name={"cross"}
                                    size={15}
                                    color={"red"}
                                    style={Styles.questionBottomMenuFavourite}/>
                        <Text style={Styles.questionBottomMenuFavouriteText}>{this.props.wrong}</Text>
                    </View>
                </View>
                <TouchableHighlight
                    style={Styles.flex1RowVCenter}
                    activeOpacity={1}
                    underlayColor={"#c8c8c8"}
                    onPress={() => {
                        this.props.showMenu && this.props.showMenu();
                    }}>
                    <View style={[Styles.flex1RowVCenter, {marginLeft: 10}]}>
                        <IconEntypo name={"list"}
                                    size={15}
                                    color={"#333333"}
                                    style={Styles.questionBottomMenuFavourite}/>
                        <Text
                            style={Styles.questionBottomMenuFavouriteText}>{this.state.currentPage}/{this.props.totalPage}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    updateState(page, isFavourite) {
        this.setState({currentPage: page, isFavourite: isFavourite});
    }

}

QuestionBottomMenu.propTypes = {
    totalPage: React.PropTypes.number,
    correct: React.PropTypes.number,
    wrong: React.PropTypes.number,
    showMenu: React.PropTypes.func.isRequired,
    favourite: React.PropTypes.func.isRequired,
    initFavourite: React.PropTypes.bool.isRequired,
};
QuestionBottomMenu.defaultProps = {
    totalPage: 0,
    correct: 0,
    wrong: 0,
    initFavourite: false,
};