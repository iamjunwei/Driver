/**
 * Created by xiajw on 16/7/28.
 */
import React from "react";
import {ScrollView, View, Image, Text, TouchableOpacity, Dimensions, Animated, Easing} from "react-native";
import Styles from "./styles";

const Screen = Dimensions.get("window");

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerLeft: new Animated.Value(-Screen.width),
            drawerOpen: false,
        }
    }

    render() {
        return (
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <ScrollView>
                    <View style={Styles.titleBar}>
                        <TouchableOpacity activeOpacity={1} onPress={() => {
                            this.showDrawer()
                        }}>
                            <Image source={require("../image/app_logo.png")} style={Styles.titleBarIcon}/>
                        </TouchableOpacity>
                        <Text style={Styles.titleBarContent}>Exercise</Text>
                        <View style={Styles.titleBarIcon}/>
                    </View>
                </ScrollView>
                {this.renderMask()}
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: this.state.drawerLeft,
                        width: Screen.width * 2 / 3
                    }}>
                    <View style={{
                        backgroundColor: 'red',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: Screen.width * 2 / 3
                    }}/>
                </Animated.View>

            </View>
        )
    }

    renderMask() {
        if (this.state.drawerOpen) {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.hideDrawer()
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: Screen.width,
                    }}>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: Screen.width,
                            backgroundColor: '#00000033',
                        }}
                    />
                </TouchableOpacity>);
        } else {
            return null;
        }
    }

    showDrawer() {
        this.state.drawerLeft.setValue(-Screen.width);
        Animated.timing(this.state.drawerLeft, {
            toValue: 0,
            easing: Easing.out(Easing.cubic),
            duration: 300,
        }).start();
        this.setState({
            drawerOpen: true,
        });
    }

    hideDrawer() {
        this.state.drawerLeft.setValue(0);
        Animated.timing(this.state.drawerLeft, {
            toValue: -Screen.width,
            easing: Easing.out(Easing.cubic),
            duration: 300,
        }).start();
        this.setState({
            drawerOpen: false,
        });
    }

}
