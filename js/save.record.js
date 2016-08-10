/**
 * Created by xiajw on 16/8/8.
 */
import {AsyncStorage} from "react-native";
import Answer from "./answer";

export default class SaveRecord {

    static saveFavourite(questions, callback) {
        SaveRecord.getFavourite((saveDatas) => {
            let i = 0;
            let j = 0;
            const final = [];
            while (i < saveDatas.length && j < questions.length) {
                if (saveDatas[i].id < questions[j].id) {
                    final.push(saveDatas[i]);
                    i++;
                } else if (saveDatas[i].id > questions[j].id) {
                    if (questions[j].isFavourite) {
                        final.push(questions[j]);
                    }
                    j++;
                } else {
                    if (questions[j].isFavourite) {
                        final.push(questions[j]);
                    }
                    i++;
                    j++;
                }
            }
            while (i < saveDatas.length) {
                final.push(saveDatas[i]);
                i++;
            }
            while (j < questions.length) {
                if (questions[j].isFavourite) {
                    final.push(questions[j]);
                }
                j++;
            }
            AsyncStorage.removeItem("favourite", (error) => {
                AsyncStorage.setItem("favourite", SaveRecord.QuestionsToString(final), (error) => {
                    callback(final);
                });
            });
        });
    }

    static getFavourite(callback) {
        AsyncStorage.getItem("favourite", (error, result) => {
            callback(SaveRecord.StringToQuestions(result));
        });
    }

    static saveWrong(questions, callback) {
        SaveRecord.getWrong((saveDatas) => {
            let i = 0;
            let j = 0;
            const final = [];
            while (i < saveDatas.length && j < questions.length) {
                if (saveDatas[i].id < questions[j].id) {
                    final.push(saveDatas[i]);
                    i++;
                } else if (saveDatas[i].id > questions[j].id) {
                    if (Answer.getAnswerType(questions[j]) < 0) {
                        final.push(questions[j]);
                    }
                    j++;
                } else {
                    if (Answer.getAnswerType(questions[j]) <= 0) {
                        final.push(questions[j]);
                    }
                    i++;
                    j++;
                }
            }
            while (i < saveDatas.length) {
                final.push(saveDatas[i]);
                i++;
            }
            while (j < questions.length) {
                if (Answer.getAnswerType(questions[j]) < 0) {
                    final.push(questions[j]);
                }
                j++;
            }
            AsyncStorage.removeItem("wrong", (error) => {
                AsyncStorage.setItem("wrong", SaveRecord.QuestionsToString(final), (error) => {
                    callback(final);
                });
            });
        });
    }

    static getWrong(callback) {
        AsyncStorage.getItem("wrong", (error, result) => {
            callback(SaveRecord.StringToQuestions(result));
        });
    }

    static QuestionsToString(questions) {
        let string = "";
        for (let i = 0; i < questions.length; i++) {
            if (i > 0) {
                string += "##";
            }
            string += JSON.stringify(questions[i]);
        }
        return string;
    }

    static StringToQuestions(result) {
        if (!(result)) {
            return [];
        }
        let questionStrings = result.split("##");
        let array = [];
        for (let i = 0; i < questionStrings.length; i++) {
            let temp = JSON.parse(questionStrings[i]);
            temp.selectA = false;
            temp.selectB = false;
            temp.selectC = false;
            temp.selectD = false;
            temp.hasChoose = false;
            array.push(temp);
        }
        return array;
    }

    static clearFavourite() {
        AsyncStorage.removeItem("favourite", (error) => {
        });
    }

    static clearWrong() {
        AsyncStorage.removeItem("wrong", (error) => {
        });
    }

}