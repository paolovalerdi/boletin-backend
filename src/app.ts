import express from "express";
import newsRoutes from "../src/routes/news";
import morgan from "morgan";

class Application {
    
    private expressApp = express();
    private PORT_KEY = "port";

    constructor() {
        this.expressApp.set(this.PORT_KEY, 3000);
        this.expressApp.set("json spaces", 2);
        this.expressApp.use(morgan("dev"))
        this.expressApp.use(express.json());
        this.expressApp.use(express.urlencoded({ extended: true }));
        this.expressApp.use("/news", newsRoutes);
        this.expressApp.listen(this.expressApp.get(this.PORT_KEY), () => {
            console.log(`Server started at port ${this.expressApp.get(this.PORT_KEY)}`);
        });
    }
}

new Application();