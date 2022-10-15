"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resize_1 = __importDefault(require("./api/resize"));
const routes = (0, express_1.Router)();
routes.use('/resize', resize_1.default);
routes.get('*', (req, res) => {
    res.status(404);
    res.send(`<h1> Page is not Found </h1>`);
});
exports.default = routes;
