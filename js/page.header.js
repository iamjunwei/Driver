/**
 * Created by xiajw on 2016/8/6.
 */
import React, {Component} from "react";
import {View, TouchableOpacity} from "react-native";
import Styles from "./styles";

export default class PageHeader extends Component {
    render() {
        return (
            <View style={Styles.pageHeader}>
                <TouchableOpacity style={Styles.pageHeaderButton} onPress={this.onLeftButtonClick}>
                    {this.renderLeftButton()}
                </TouchableOpacity>
                <View style={Styles.pageHeaderContent}>
                    {this.renderContent()}
                </View>
                <TouchableOpacity style={Styles.pageHeaderButton} onPress={this.onRightButtonClick}>
                    {this.renderRightButton()}
                </TouchableOpacity>
            </View>
        )
    }

    renderLeftButton() {
        if (this.props.leftButton) {
            return this.props.leftButton;
        } else {
            return null;
        }
    }

    renderRightButton() {
        if (this.props.rightButton) {
            return this.props.rightButton;
        } else {
            return null;
        }
    }

    renderContent() {
        if (this.props.title) {
            return this.props.title;
        } else {
            return null;
        }
    }

    onLeftButtonClick = () => {
        this.props.leftButtonClick && this.props.leftButtonClick();
    };

    onRightButtonClick = () => {
        this.props.rightButtonClick && this.props.rightButtonClick();
    };
}
PageHeader.propTypes = {
    leftButton: React.PropTypes.element,
    title: React.PropTypes.element.isRequired,
    rightButton: React.PropTypes.element,
    leftButtonClick: React.PropTypes.func,
    rightButtonClick: React.PropTypes.func,
};