import express from "express";

const app = express();
const PORT_KEY = "port"

app.set(PORT_KEY, 3000);

app.listen(app.get(PORT_KEY),()=> {
    console.log(`Server started at port ${app.get(PORT_KEY)}`);
});