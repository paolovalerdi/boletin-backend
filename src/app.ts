import express from "express";
import newsRoutes from "../src/routes/news";

const app = express();
const PORT_KEY = "port"

app.set(PORT_KEY, 3000);
app.set("json spaces", 2);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/news", newsRoutes);

app.listen(app.get(PORT_KEY), () => {
    console.log(`Server started at port ${app.get(PORT_KEY)}`);
});