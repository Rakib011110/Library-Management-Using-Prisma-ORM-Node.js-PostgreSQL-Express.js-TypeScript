"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "An unexpected error occurred";
    res.status(status).json({
        success: false,
        status,
        message,
    });
};
exports.errorHandler = errorHandler;
