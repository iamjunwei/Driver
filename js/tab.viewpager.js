/**
 * Created by xiajw on 2016/8/6.
 */
import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import Styles from "./styles";
import Swiper from "react-native-swiper";

export default class TabViewPager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTab: 0
        }
    }

    renderSwiper() {
        let views = [];
        for (let i = 0; i < this.props.tabs.length; i++) {
            views.push(
                <View style={Styles.root} key={"tab.viewpager.page" + i}>
                    {this.props.views[i]}
                </View>
            )
        }
        return (
            <View style={Styles.root}>
                <View style={Styles.tabViewPagerTabs}>
                    {this.renderTabs()}
                </View>
                <Swiper
                    ref="swiper"
                    loop={false}
                    style={Styles.root}
                    renderPagination={(index, total, context) => {
                        return null;
                    }}
                    onMomentumScrollEnd={(e, state, context) => {
                        this.setState({selectTab: state.index})
                    }}>
                    {views}
                </Swiper>
            </View>
        );
    }

    render() {
        return this.renderSwiper();
    }

    renderTabs = () => {
        let tabs = [];
        for (var i = 0, l = this.props.tabs.length; i < l; i++) {
            var tabContent = this.props.tabs[i];
            const j = i;
            let styleContent = Styles.tabViewPagerTabContentUnSelect;
            let styleTabContainer = Styles.tabViewPagerTabUnSelect;
            if (j == this.state.selectTab) {
                styleContent = Styles.tabViewPagerTabContentSelect;
                styleTabContainer = Styles.tabViewPagerTabSelect;
            }
            tabs.push(
                <TouchableOpacity style={styleTabContainer} onPress={() => {
                    this.onTabSelect(j)
                }} key={"" + j}>
                    <View style={Styles.tavViewPagerTab}>
                        <Text style={styleContent}>{tabContent}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return tabs;
    }
    onTabSelect = (i) => {
        this.props.onTabChange && this.props.onTabChange(i);
        this.refs.swiper.scrollBy(i - this.state.selectTab);
    }

}
TabViewPager.propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    views: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    onTabChange: React.PropTypes.func,
};