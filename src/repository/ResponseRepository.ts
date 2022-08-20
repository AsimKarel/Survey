import { Survey_Response } from "../models/survey_response";

let answers = []

export class ResponseRepository{

    public constructor() {}

    public save(response:Survey_Response){
        answers.push(response)
    }


    public delete(id:string){
        if(id)
            answers = answers.filter((d:Survey_Response)=>d.id != id)
        else
            answers = []
    }

    public getAll(){
        return answers
    }

    public get(id:string){
        return answers.filter((d:Survey_Response)=>d.id == id)
    }

    public getAllForSurveyId(survey_id:string){
        return answers.filter((d:Survey_Response)=>d.survey_id == survey_id)
    }
}

