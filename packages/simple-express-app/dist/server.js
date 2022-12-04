"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const lodash_1 = __importDefault(require("lodash"));
const app = (0, express_1.default)();
// const allowedOrigins = ['http://localhost:3000'];
// const options: cors.CorsOptions = {
//     origin: allowedOrigins
// };
//
// app.use(cors(options));
const port = 3001;
app.use((_req, res, next) => {
    // Allow any website to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Continue to next middleware
    next();
});
app.get("/", (_req, res) => {
    const responseData = {
        payload: lodash_1.default.snakeCase("Server data returned successfully"),
    };
    res.json(responseData);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
