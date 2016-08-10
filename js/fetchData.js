/**
 * Created by xiajw on 2016/8/2.
 */
import QuestionModel from "./question.model";

export default class FetchData {
    static fetch(subject, model, testType, onSuccess, onFail) {
        let url = "http://api2.juheapi.com/jztk/query?subject=" + subject + "&model=" + model + "&key=381a1c9b84ca2cb422ff8aee8de1b44c&testType=" + testType;
        fetch(url).then((response) => {
            let questions = [];
            let json = JSON.parse(response._bodyInit);
            for (var q in json.result) {
                let qTemp = new QuestionModel();
                qTemp.id = model + "_" + json.result[q].id;
                qTemp.question = json.result[q].question;
                qTemp.item1 = json.result[q].item1;
                qTemp.item2 = json.result[q].item2;
                qTemp.item3 = json.result[q].item3;
                qTemp.item4 = json.result[q].item4;
                if (!(qTemp.item1) && !(qTemp.item2) && !(qTemp.item3) && !(qTemp.item4)) {
                    qTemp.item1 = "正确";
                    qTemp.item2 = "错误";
                    qTemp.item3 = "";
                    qTemp.item4 = "";
                }
                qTemp.answer = json.result[q].answer;
                qTemp.url = json.result[q].url;
                qTemp.explains = json.result[q].explains;
                qTemp.isJudge = (qTemp.item3 == "");
                qTemp.isFavourite = false;
                questions.push(qTemp);
            }
            if (questions.length > 0) {
                questions.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1;
                    } else if (a.id > b.id) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
            }
            onSuccess(questions);
        }, (e) => {
            onFail(e);
        })
    }
}