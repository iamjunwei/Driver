/**
 * Created by xiajw on 16/7/28.
 */
import {StyleSheet} from "react-native";

var Styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#efeff4',
    },
    centerInContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeaderButton: {
        padding: 10,
        width: 50,
        height: 50,
    },
    pageHeaderButtonIcon: {
        width: 30,
        height: 30,
    },
    pageHeaderContent: {
        flex: 1,
        alignItems: 'center',
    },
    pageHeaderContentText: {
        color: 'white',
        fontSize: 18,
    },
    pageHeader: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#099fde',
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    welcomeIcon: {
        marginTop: 50,
    },
    welcomeDesc: {
        marginTop: 50,
        fontSize: 20,
        color: '#333333'
    },
    flex1RowVCenter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loadingView: {
        flex: 1,
        backgroundColor: 'rgb(192, 192, 192)',
        alignItems: 'center',
    },
    loadingViewImage: {
        marginTop: 50,
        width: 100,
        height: 100,
    },
    loadingViewText: {
        marginTop: 50,
        color: '#333333',
        fontSize: 16,
    },
    loadingMask: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    loadingMaskCenterView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingMaskImage: {
        width: 40,
        height: 40,
    },
    loadingMaskText: {
        marginLeft: 20,
        color: '#333333',
        fontSize: 16,
    },
    questionText: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: '#333333',
        fontSize: 16,
        lineHeight: 25,
    },
    questionImage: {
        margin: 20,
    },
    questionItem: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    questionItemIcon: {
        width: 25,
        height: 25,
    },
    questionItemText: {
        marginLeft: 10,
        color: '#333333',
        fontSize: 16,
        lineHeight: 25,
    },
    questionBottomMenu: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    questionBottomMenuFavourite: {
        marginLeft: 10,
        height: 15,
        width: 15,
    },
    questionBottomMenuFavouriteText: {
        color: "#333333",
        fontSize: 13,
        marginLeft: 5,
    },
    tabViewPagerTabs: {
        height: 40,
        flexDirection: 'row',
    },
    tavViewPagerTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabViewPagerTabUnSelect: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#c8c8c8',
        borderBottomWidth: 1,
    },
    tabViewPagerTabSelect: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#099fde',
        borderBottomWidth: 1,
    },
    tabViewPagerTabContentUnSelect: {
        color: '#333333',
        fontSize: 16,
    },
    tabViewPagerTabContentSelect: {
        color: '#099fde',
        fontSize: 16,
    },
    modelTabContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    modelTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c8c8c8',
        borderBottomWidth: 1,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
    },
    modelTabInner: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: "#099fde",
    },
    modelTabContentUnSelect: {
        color: '#333333',
        fontSize: 16,
    },
    modelTabContentSelect: {
        color: 'white',
        fontSize: 16,
    },
    homePageFunctionArea: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homePageFunctionInOrder: {
        flex: 1,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homePageInOrderButtonArea: {
        borderRadius: 40,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homePageInOrderButton: {
        color: 'white',
        fontSize: 15,
    },
    questionMenuLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    questionMenuSingleNumContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionMenuSingleNumInnerView: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    questionMenuTitle: {
        height: 30,
        marginTop: 15,
        color: '#333333',
        fontSize: 14,
        marginLeft: 25,
    },
});

export default Styles;