/**
 * Created by xiajw on 16/8/8.
 */
import React, {Component} from "react";
import {Text, View, TouchableOpacity, ListView} from "react-native";
import Styles from "./styles";
import Answer from "./answer";

export default class QuestionMenu extends Component {

    constructor(props) {
        super(props);
        let i = 0;
        let j = 0;
        let temp = [];
        this.localData = [];
        while (i < this.props.data.length) {
            j = 0;
            temp = [];
            while (i + j < this.props.data.length && j < 6) {
                temp.push({
                    index: i + j,
                    value: this.props.data[i + j],
                });
                j++;
            }
            while (j < 6) {
                temp.push({
                    index: i + j,
                    value: null,
                });
                j++;
            }
            this.localData.push(temp);
            i += 6;
        }
    }

    render() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return (
            <View style={{flex: 1}}>
                <Text style={Styles.questionMenuTitle}>请选择题号</Text>
                <ListView
                    dataSource={ds.cloneWithRows(this.localData)}
                    renderRow={this.renderRow}
                    scrollRenderAheadDistance={200}>
                </ListView>
            </View>
        )
    }

    renderRow = (rowData) => {
        return (
            <View style={Styles.questionMenuLine}>
                {this.renderLine(rowData)}
            </View>
        );
    }

    renderLine = (rowData) => {
        let j = 0;
        let views = [];
        while (j < 6) {
            const index = rowData[j].index;
            if (rowData[j].value != null) {
                let type = Answer.getAnswerType(rowData[j].value);
                let borderColor = "#888888";
                let textColor = "#888888";
                if (type > 0) {
                    borderColor = "#00ff00";
                    textColor = "#00ff00";
                } else if (type < 0) {
                    borderColor = "#ff0000";
                    textColor = "#ff0000";
                }
                views.push(
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={Styles.questionMenuSingleNumContainer}
                        key={"question.menu.index" + index}
                        onPress={() => {
                            this.props.onSelectIndex && this.props.onSelectIndex(index);
                        }}>
                        <View style={[Styles.questionMenuSingleNumInnerView, {borderColor: borderColor}]}>
                            <Text
                                style={{textAlign: 'center', color: textColor}}>
                                {index + 1}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
                j++;
            } else {
                views.push(
                    <View
                        style={Styles.questionMenuSingleNumContainer}
                        key={"question.menu.index" + index}>
                        <View style={{height: 40, width: 40}}>
                            <Text
                                style={{textAlign: 'center'}}>
                            </Text>
                        </View>
                    </View>
                );
                j++;
            }

        }
        return views;
    }
}

QuestionMenu.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    onSelectIndex: React.PropTypes.func.isRequired,
};