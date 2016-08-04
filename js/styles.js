/**
 * Created by xiajw on 16/7/28.
 */
import {StyleSheet} from "react-native";

var Styles = StyleSheet.create({
    titleBarIcon: {
        marginLeft: 10,
        marginRight: 10,
        width: 30,
        height: 30,
    },
    titleBarContent: {
        flex: 1,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    titleBar: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    root: {
        flex: 1
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
    questionText: {
        marginTop: 10,
        marginLeft: 20,
        color: '#333333',
        fontSize: 16,
        lineHeight: 25,
    },
    questionImage: {
        margin: 20,
    },
    questionItem: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    questionItemIcon: {
        width: 25,
        height: 25,
    },
    questionItemText: {
        flex: 1,
        marginLeft: 10,
        color: '#333333',
        fontSize: 16,
        lineHeight: 25,
    },
    questionBottomMenu: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "white",
    },
    questionBottomMenuFavourite: {
        marginLeft: 10,
        height: 20,
        width: 20,
    },
    questionBottomMenuFavouriteText: {
        color: "#333333",
        fontSize: 13,
        marginLeft: 5,
    },
});

export default Styles;