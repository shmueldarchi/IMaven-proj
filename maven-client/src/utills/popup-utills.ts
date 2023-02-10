import { IAnswer, IQuery, IQuestion, IQuestionKind } from "../models/question-models";
import '../assets/flow-ico/ion_home.png'

export function createQuery(Qname: string, Qcategory: string): IQuery {
    let questions: IQuestion[];
    let question: IQuestion;
    let questionEnd: IQuestion;
    questions = [];
    question = questionFactory('start', 'First Question', { kind: "Text" }, 800, 50, [{ next: "end" }], '/Users/shmueldarchi/Desktop/Maven/maven-client/src/assets/flow-ico/ion_home.png');
    questions.push(question);

    questionEnd = questionFactory('end', 'Last Question', { kind: "Text" }, 800, 250, [{ next: "" }], '/Users/shmueldarchi/Desktop/Maven/maven-client/src/assets/flow-ico/ion_home.png');
    questions.push(questionEnd);

    const query: IQuery = { id: Qname + '-' + Qcategory, name: Qname, category: Qcategory, questions: questions };
    return query;
}

export function addQueryToList(query: IQuery, queryList: IQuery[]) {
    const listTemp = [...queryList];
    if (!listTemp.length) {
        listTemp.push(JSON.parse(JSON.stringify(query)));
        return listTemp;
    }
    listTemp.push(JSON.parse(JSON.stringify(query)));
    return listTemp;
}

export function questionFactory(id: string, title: string, first: IQuestionKind, x: number, y: number, connection: { answer?: IAnswer, next: string }[], icon: string): IQuestion {
    let newQuestion: IQuestion;
    let type = "circle";
    newQuestion = { id, title, type, first, position: { x, y }, connection, icon };
    return newQuestion;
}