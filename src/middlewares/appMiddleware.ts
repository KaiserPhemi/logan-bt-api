/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// dependencies
import logger from "morgan";
import express from "express";

// middlewares
export default (app: {
  use: (arg0: {
    (
      req: import("http").IncomingMessage,
      res: import("http").ServerResponse,
      callback: (err?: Error | undefined) => void
    ): void;
    (
      req: import("connect").IncomingMessage,
      res: import("http").ServerResponse,
      next: import("connect").NextFunction
    ): void;
    (
      req: import("connect").IncomingMessage,
      res: import("http").ServerResponse,
      next: import("connect").NextFunction
    ): void;
  }) => void;
  disable: (arg0: string) => void;
}) => {
  app.use(logger("dev"));
  app.use((req: any, res: any, next: () => void) => {
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
