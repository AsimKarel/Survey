import { AdminController } from "./controllers/AdminController"
import { ParticipantController } from "./controllers/ParticipantController"

export const Routes = [
    {
      method: "get",
      route: "/admin/survey/get-all",
      controller: AdminController,
      action: "allQuestions",
    },
    {
      method: "post",
      route: "/admin/survey/create",
      controller: AdminController,
      action: "createSurvey",
    },
    {
      method: "delete",
      route: "/admin/survey/delete",
      controller: AdminController,
      action: "delete",
    },
    {
      method: "post",
      route: "/participant/submit",
      controller: ParticipantController,
      action: "submitResponse",
    },
    {
      method: "get",
      route: "/participant/response/get-by-survey",
      controller: ParticipantController,
      action: "allResponsesBySurveyId",
    },
    {
      method: "get",
      route: "/participant/response/get-all",
      controller: ParticipantController,
      action: "allResponses",
    }
]