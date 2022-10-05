const express = require("express");
const path = require("path");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this._routes = {
            login: "login"
        }
        this.routes();
    }

    middlewares = () => {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes = () => {
        this.app.use(this.routes.login, require("../routes/login.js"));
    }
}