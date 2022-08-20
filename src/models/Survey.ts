import { Question } from "./Question";
import { generate } from 'shortid';


export class Survey{
    id: string
    name: string
    createdBy: string
    questions?: Question[]
    createdOn:Date

  public constructor(input:any) {
    if(!input.id){
        this.id = generate()
    }
    if(!this.questions){
        this.questions = []
    }
    this.name = input.name
    this.createdBy = input.createdBy
    this.createdOn = new Date()
    for(let quest of input.questions){
        let question:Question = {
          id: generate(),
          text: quest.text,
          survey_id: this.id,
          choices: quest.choices
        }
        this.questions.push(question);
    }
  }
}