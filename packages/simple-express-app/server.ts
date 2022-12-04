import express from 'express';
import cors from 'cors';
const app = express();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

const port = 3001;

app.get("/data", (req, res) => {
    res.json({ foo: "bar" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});