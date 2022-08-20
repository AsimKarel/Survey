import { NextFunction, Request, Response } from "express"
import { Survey } from "../models/survey"
import { SurveyRepository } from "../repository/SurveyRepository"


export class AdminController {
    private surveyRepository = new SurveyRepository()
    async allQuestions(request: Request, response: Response, next: NextFunction) {
      try{
        return this.surveyRepository.getAll()
      }
      catch (e){
        console.log(e)
        return "Error"
      }
      
    }
  
    async createSurvey(request: Request, response: Response, next: NextFunction) {
      try{
        const { body: params } = request
        let survey = new Survey(params);
        this.surveyRepository.save(survey);
        return this.surveyRepository.getAll()
      }
      catch (e){
        console.log(e)
        return "Error"
      }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
      try{
        let surveyId = request.param('surveyId')
        this.surveyRepository.clear(surveyId)
        return "Deleted"
      }
      catch (e){
        console.log(e)
        return "Error"
      }
    }
}