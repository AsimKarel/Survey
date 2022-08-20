import { NextFunction, Request, Response } from "express"
import { Survey } from "../models/survey"
import { Survey_Response } from "../models/survey_response"
import { ResponseRepository } from "../repository/ResponseRepository"


export class ParticipantController {
    private responseRepository = new ResponseRepository()

    async allResponsesBySurveyId(request: Request, response: Response, next: NextFunction) {
      try{
        let surveyId = request.param('surveyId')
        
        return this.responseRepository.getAllForSurveyId(surveyId)
      }
      catch (e){
        console.log(e)
      }
    }
  
    async submitResponse(request: Request, response: Response, next: NextFunction) {
      try{
        const { body: params } = request
        let survey = new Survey_Response(params);
        this.responseRepository.save(survey);
        return "SUCCESS"
      }
      catch (e){
        console.log(e)
      }
    }

    async allResponses(request: Request, response: Response, next: NextFunction) {
      try{
        return this.responseRepository.getAll()
      }
      catch (e){
        console.log(e)
      }
    }
    
}