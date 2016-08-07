/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Navigator} from "react-native";
import WelcomePage from "./js/welcome";
import HomeContainer from "./js/home.container";

class DriverLicense extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: "Welcome", index: 0}}
                renderScene={(route, navigator) => {
                    if (route.index == 0) {
                        return <WelcomePage onFinish={() => {
                            navigator.push({title: "Home", index: 1})
                        }}/>
                    } else {
                        return <HomeContainer/>
                    }
                }}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
            />
        );
    }
}

AppRegistry.registerComponent('DriverLicense', () => DriverLicense);
