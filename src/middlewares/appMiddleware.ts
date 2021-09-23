/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// dependencies
import morgan from "morgan";
import express, { Request, Response, NextFunction } from "express";

// middlewares
export default (app: {
  use: (arg0: {
    (
      req: Request,
      res: Response,
      callback: (err?: Error | undefined) => void
    ): void;
    (req: Request, res: Response, next: NextFunction): void;
    (
      req: import("connect").IncomingMessage,
      res: import("http").ServerResponse,
      next: import("connect").NextFunction
    ): void;
  }) => void;
  disable: (arg0: string) => void;
}) => {
  app.use(morgan("dev"));
  app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.disable("x-powered-by");
};
