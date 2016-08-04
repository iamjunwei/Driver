/**
 * Created by xiajw on 2016/8/1.
 */
import React, {Component} from "react";
import {Modal, View, Text, Animated, Easing} from "react-native";
import Styles from "./styles";

export default class LoadingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: new Animated.Value(0),
        }
    }

    render() {
        return (
            <Modal
                animationType={"none"}
                transparent={true}
                visible={this.props.isLoading}
                onRequestClose={() => {
                }}>
                <View style={Styles.loadingView}>
                    <Animated.Image
                        source={require("../image/app_logo.png")}
                        style={[Styles.loadingViewImage, {
                            transform: [{
                                rotateZ: this.state.rotate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "360deg"],
                                }),
                            }]
                        }]}/>
                    <Text style={Styles.loadingViewText}>加载中，请稍后</Text>
                </View>
            </Modal>
        );
    }

    componentDidMount() {
        this.startLoading();
    }

    startLoading() {
        this.state.rotate.setValue(0);
        Animated.timing(this.state.rotate, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
        }).start(() => {
            this.startLoading()
        });
    }

}
LoadingView.propTypes = {
    isLoading: React.PropTypes.bool,
};
LoadingView.defaultProps = {
    isLoading: false,
};