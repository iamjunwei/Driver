/**
 * Created by xiajw on 16/7/28.
 */
import React, {Component} from "react";
import {Navigator, BackAndroid} from "react-native";
import HomeContainer from "./home.container";

export default class HomePage extends Component {
    render() {
        return (
            <Navigator
                ref='navigator'
                initialRoute={{title: "Home", index: 0}}
                renderScene={(route, navigator) => {
                    return (
                        <HomeContainer />
                    );
                }}
            />
        )
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            this.onBackPress()
        });
    }

    onBackPress() {
        return (this.refs.navigator.getCurrentRoutes().length > 1);
    }
}