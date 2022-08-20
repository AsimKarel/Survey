# Survey
How to run app:
1. Clone the repo
2. Install npm packages running command “npm install” in project’s root folder
3. Run the server using command “npm start”
4. Access the API via tools like postman using below formats 

The APIs mentioned below are available for use:
All the APIs are protected via token based authentication.


<b>Create Survey</b><br />
Method: POST<br />
URL: /admin/survey/create<br />
Request Body:<br />
{
 "name": "Coffee survey",
 "questions":[
 {
 "text":"What is your favourite coffee?",
 "choices":["Black coffee", "Latte", "Cold coffee"]
 },
 {
 "text":"How many cups of coffee do you drink?",
 "choices":["1-2", "2-3", "More than 3"]
 }
 ]
}<br />
Response: SUCCESS/FAILURE


<b>Get All Surveys in System</b><br />
Method: GET<br />
URL: /admin/survey/get-all<br />
Response Body:<br />
[
 {
 "id": "WcAvpWyou",
 "questions": [ 
 {
 "id": "Hy_DOt3DPC",
 "text": "What is your favourite coffee?",
 "survey_id": "WcAvpWyou",
 "choices": [
 "Black coffee",
 "Latte",
 "Cold coffee"
 ]
 },
 {
 "id": "wkSha_bs5F",
 "text": "How many cups of coffee do you drink?",
 "survey_id": "WcAvpWyou",
 "choices": [
 "1-2",
 "2-3",
 "More than 3"
 ]
 }
 ],
 "name": "Coffee survey",
 "createdOn": "2022-08-20T04:59:47.128Z"
 }
]
<br />

<b>Delete Surveys in System</b><br />
Method: DELETE<br />
URL: /admin/survey/delete?surveyId= (If surveyId is not passed, all the surveys in system will be
deleted)<br />
Response Body: DELETED/FAILED<br />
<br />

<b>Submit Survey Response by Participant</b><br />
Method: POST<br />
URL: /participant/submit<br />
Request Body:<br />
{
 "survey_id":"I3aVJ16yn",
 "submitted_by": "John Doe",
 "answers":[
 {
 "text":"What is your favourite coffee?",
 "chosen":["White coffee", "Ice coffee"]
 },
 {
 "text":"How many cups of coffee do you drink?",
 "chosen":["4-5"]
 }
 ]
}


<b>Get All Survey Responses by Participant for given surveyId</b><br />
Method: GET<br />
URL: /participant/response/get-by-survey?surveyId=I3aVJ16yn
Response Body:<br />
[
 {
 "id": "Pvg0vscJj",
 "answers": [
 {
 "id": "OKubEKRdaN", 
 "question": "What is your favourite coffee?",
 "survey_id": "Pvg0vscJj",
 "selected_choices": [
 "Cold coffee",
 "Black coffee"
 ]
 },
 {
 "id": "1cjm4fKRN0",
 "question": "How many cups of coffee do you drink?",
 "survey_id": "Pvg0vscJj",
 "selected_choices": [
 "4-5"
 ]
 }
 ],
 "survey_id": "I3aVJ16yn",
 "submitted_on": "Sat Aug 20 2022 10:11:02 GMT+0530 (India Standard Time)"
 }
] 