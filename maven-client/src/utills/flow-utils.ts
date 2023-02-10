import { IAnswer, IQuestionKind } from '../models/question-models';
import {IQuestion} from '../models/question-models';

export function generateFlowElements(flow) {
    const edges = generateEdges(flow);
    const nodes = generateNodes()
    return { edges, nodes }
}

export function generateEdges(flow) {
    let edges = [];
    for (let index = 0; index < flow.length; index++) {
        const element = flow[index];
        let edge = { target: "", source: "", id: "" };
        edge.source = element.id;
        if (element?.next)
            edge.target = element.next.id;

        edge.target = element.id + '-' + element.next.id;
        edges.push(edge);

    }
    return edges;
}

export function generateNodes() {
 
}

export function questionFactory (id:string, title:string, first:IQuestionKind, x:number, y: number,connection:{answer?:IAnswer, next:string}[], icon:string ):IQuestion{
  console.log('cccccccc');
    let newQuestion : IQuestion;
  let type = "circle";
  newQuestion = {id,title,type,first,position:{x,y},connection,icon};
  return newQuestion;
}