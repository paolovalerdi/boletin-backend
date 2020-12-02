import express from "express";
import newsRoutes from "../src/routes/news";
import morgan from "morgan";

const app = express();

class Application {
    private PORT_KEY = "port";

    init() {
        app.set(this.PORT_KEY, 3000);
        app.set("json spaces", 2);
        app.use(morgan("dev"))
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use("/news", newsRoutes);
        app.listen(app.get(this.PORT_KEY), () => {
            console.log(`Server started at port ${app.get(this.PORT_KEY)}`);
        });
    }
}

const server = new Application()
server.init();