"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = void 0;
const sharp_1 = __importDefault(require("sharp"));
const resize = (req, res, next) => {
    const { filename } = req.query;
    (0, sharp_1.default)('${filename}.jpg')
        .resize(200, 300)
        .toFile('output.png');
    if (!filename)
        return res.status(404).send('wrong image filename');
    next();
};
exports.resize = resize;
