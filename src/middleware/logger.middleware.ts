import { Request, Response, NextFunction } from 'express';
import { createLogger } from 'winston';

const winston = createLogger()


export function logger(req: Request, res: Response, next: NextFunction) {
    winston.info("")
    const remoteAddr = req.ip;
    const date = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;
    const statusCode = res.statusCode;
    const contentLength = res.getHeader('Content-Length') || "";

    const requestString = `${remoteAddr} - [${date}] "${method} ${url}" ${statusCode} ${contentLength}`;

    console.log(requestString);
    next()
};