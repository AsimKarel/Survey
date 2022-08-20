import { Survey } from "../models/survey";

let questions = []

export class SurveyRepository{

    public constructor() {}

    public save(survey:Survey){
        questions.push(survey)
    }


    public clear(id:string){
        if(id)
            questions = questions.filter((d:Survey)=>d.id != id)
        else
            questions = []
    }

    public getAll(){
        return questions
    }

    public get(id:string){
        return questions.filter((d:Survey)=>d.id == id)
    }

    public getSurveyNameById(id:string){
        let survey =  (questions.filter((d:Survey)=>d.id == id)[0]) as Survey
        if(survey)
            return survey.name
        return ""
    }
}

