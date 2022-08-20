import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import Helmet from "helmet"
import * as morgan from "morgan"
import { Request, Response } from "express"
import { Routes } from "./routes"
import { auth } from "./middleware/Authentication"

const app = express()
// adding Helmet to enhance Rest API's security
app.use(Helmet());
// enabling CORS for all requests
app.use(cors())
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())
// adding morgan to log HTTP requests
app.use(morgan('combined'));

// register express routes from defined application routes
Routes.forEach((route) => {
    ;(app as any)[route.method](route.route, auth, (req: Request, res: Response, next: Function) => {
    const result = new (route.controller as any)()[route.action](req, res, next)
    if (result instanceof Promise) {
        result.then((result) => (result !== null && result !== undefined ? res.send(result) : undefined))
    } else if (result !== null && result !== undefined) {
        res.json(result)
    }
    })
})

// start express server
app.listen(4001)