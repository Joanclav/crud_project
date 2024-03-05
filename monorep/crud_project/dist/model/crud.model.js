"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudSchema = void 0;
const mongoose = require("mongoose");
exports.CrudSchema = new mongoose.Schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: Boolean, default: false },
});
//# sourceMappingURL=crud.model.js.map