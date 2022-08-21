import {generate} from "shortid"

export class Question{
    id: string
    text?: string
    survey_id: string
    choices?:[string]

  public constructor(input) {
    if(!input.id){
        this.id = generate()
    }
    this.text = input.text
    this.survey_id = input.survey_id
    this.choices = input.choices
  }
}

export class Response{
  id: string
  survey_id: string
  question:string
  selected_choices:[string]

  public constructor(input) {
    this.selected_choices = input.selected_choices
    this.question = input.question
  }
}

