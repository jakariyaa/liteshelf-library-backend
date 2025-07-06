"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = __importDefault(require("./app/controllers/books.controller"));
const borrow_controller_1 = __importDefault(require("./app/controllers/borrow.controller"));
const error_handler_1 = require("./app/middlewares/error.handler");
const unknown_endpoint_1 = require("./app/middlewares/unknown.endpoint");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use((req, res, next) => {
    console.log(req.method, req.path, req.body);
    next();
});
app.get("/", (req, res) => {
    res.send("Welcome to the Library Management API");
});
app.use("/api/books", books_controller_1.default);
app.use("/api/borrow", borrow_controller_1.default);
app.use(unknown_endpoint_1.unknownEndpoint);
app.use(error_handler_1.globalErrorHandler);
exports.default = app;
