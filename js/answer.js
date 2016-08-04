/**
 * Created by xiajw on 2016/8/2.
 */
export default class Answer {
    static isQuestionCorrect(question) {
        let result = 0;
        if (question.selectA) result |= 1;
        if (question.selectB) result |= 2;
        if (question.selectC) result |= 4;
        if (question.selectD) result |= 8;
        if (question.answer == "1") {
            return result == 1;
        } else if (question.answer == "2") {
            return result == 2;
        } else if (question.answer == "3") {
            return result == 4;
        } else if (question.answer == "4") {
            return result == 8
        } else if (question.answer == "7") {
            return result == 3;
        } else if (question.answer == "8") {
            return result == 5;
        } else if (question.answer == "9") {
            return result == 9;
        } else if (question.answer == "10") {
            return result == 6;
        } else if (question.answer == "11") {
            return result == 10;
        } else if (question.answer == "12") {
            return result == 12;
        } else if (question.answer == "13") {
            return result == 7;
        } else if (question.answer == "14") {
            return result == 11;
        } else if (question.answer == "15") {
            return result == 13;
        } else if (question.answer == "16") {
            return result == 14;
        } else {
            return result == 15;
        }
    }

    static getResultAnswer(question) {
        if (question.answer == "1") {
            return 1;
        } else if (question.answer == "2") {
            return 2;
        } else if (question.answer == "3") {
            return 3;
        } else if (question.answer == "4") {
            return 4;
        } else {
            return 0;
        }
    }

    static getAnswerType(question) {
        if (question.hasChoose) {
            if (Answer.isQuestionCorrect(question)) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    }
}