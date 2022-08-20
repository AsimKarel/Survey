import { Question, Response } from "./Question";
import {generate} from "shortid"


export class Survey_Response{
    id: string
    survey_id: string
    submitted_by: string
    submitted_on: string
    answers: Question[]

    public constructor(input) {
        if(!input.id){
            this.id = generate()
        }
        if(!this.answers){
            this.answers = []
        }
        this.submitted_by = input.submitted_by
        this.survey_id = input.survey_id
        this.submitted_on = Date()
        
        for(let ans of input.answers){
            let answer:Response = {
                id: generate(),
                question: ans.text,
                survey_id: this.id,
                selected_choices: ans.chosen
            }
            this.answers.push(answer);
        }
    }
}