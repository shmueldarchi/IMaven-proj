export interface IQuery {
    id: string;
    name: string;
    category: string;
    questions: IQuestion[];

}

export interface IQuestion {
    id: string;
    title: string;
    type: string;
    first: IQuestionKind;
    second?: IQuestionKind;
    third?: IQuestionKind;
    previous?: string[];
    position: { x: number, y: number };
    connection: { answer?: IAnswer, next: string }[];
    icon: string;
}

export interface IQuestionKind {
    kind: string;

}

export interface ITextBox extends IQuestionKind {
    text: string;

}
export interface IRadioButton extends IQuestionKind {
    question: string;
    answers: string[];

}
export interface ICheckBox extends IQuestionKind {
    question: string;
    answers: string[];

}

export interface IImage extends IQuestionKind {
    url: string;

}

export interface IAnswer {
    answer: string[];
    expected: string[];
}
