/**
 * Created by xiajw on 16/7/28.
 */
import React, {Component} from "react";
import {View, Text, Animated} from "react-native";
import Styles from "./styles";

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: new Animated.Value(0),
        };
    }

    render() {
        return (
            <View style={Styles.welcomeContainer}>
                <Animated.Image
                    style={
                        [Styles.welcomeIcon, {
                            transform: [{
                                rotateZ: this.state.angle.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '720deg']
                                })
                            }]
                        }]
                    }
                    source={require("../image/app_logo.png")}/>
                <Text style={Styles.welcomeDesc}>轻松过驾考</Text>
            </View>
        )
    }

    componentDidMount() {
        this.startRotate();
        setTimeout(() => {
            this.goNext()
        }, 3000);
    }

    startRotate() {
        Animated.timing(this.state.angle, {
            toValue: 1,
            duration: 3000,
        }).start();
    }

    goNext() {
        this.props.onFinish && this.props.onFinish();
    }
}