/**
 * Created by xiajw on 16/7/28.
 */
import React, {Component} from "react";
import {Navigator, BackAndroid} from "react-native";
import HomePage from "./home.page";
import PracticeInOrder from "./practice.inorder";

export default class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageReady: false,
        }
    }

    render() {
        return (
            <Navigator
                ref='navigator'
                initialRoute={{index: 0, data: null}}
                renderScene={(route, navigator) => {
                    if (route.index == 0) {
                        return (
                            <HomePage navigator={navigator}/>
                        );
                    } else if (route.index == 1) {
                        return (
                            <PracticeInOrder data={route.data} navigator={navigator}/>
                        )
                    }

                }}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
            />
        )
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            return this.onBackPress()
        });
    }

    onBackPress() {
        if (this.refs.navigator.getCurrentRoutes().length > 1) {
            this.refs.navigator.pop();
            return true;
        } else {
            return false;
        }
    }
}