/**
 * Created by xiajw on 2016/8/6.
 */
import React, {Component} from "react";
import {Dimensions, View, Animated, Easing, TouchableOpacity} from "react-native";

const ScreenSize = Dimensions.get("window");

export default class BottomFloatMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topDistance: new Animated.Value(ScreenSize.height),
        }
    }

    componentDidMount() {
        Animated.timing(this.state.topDistance, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Animated.View style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgb(0, 0, 0)",
                    opacity: this.state.topDistance.interpolate({
                        inputRange: [0, ScreenSize.height],
                        outputRange: [0.5, 0],
                    })
                }}/>
                <Animated.View style={{top: this.state.topDistance, flex: 1}}>
                    <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={() => {
                        this.closeMenu()
                    }}>
                    </TouchableOpacity>
                    <View style={{flex: 2, backgroundColor: 'white'}}>
                        {this.props.menuView}
                    </View>
                </Animated.View>
            </View>
        );
    }

    closeMenu = () => {
        this.state.topDistance.setValue(0);
        Animated.timing(this.state.topDistance, {
            toValue: ScreenSize.height,
            duration: 300,
            easing: Easing.linear,
        }).start(() => {
            this.props.onMenuClose();
        });
    }
}

BottomFloatMenu.propTypes = {
    onMenuClose: React.PropTypes.func.isRequired,
    menuView: React.PropTypes.element.isRequired,
};