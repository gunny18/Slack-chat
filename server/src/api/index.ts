import express from "express";
import cors from "cors";
import { getRootRouter } from "./routes";
import { SocketOperations } from "../socket";

export function initApi(app: express.Application) {
  // body parsing middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // cors!
  app.use(cors());

  // init the socket and regiser the events, etc!
  const sck = new SocketOperations(app.get("io"));
  sck.init();

  // routers!
  app.use("/api/v1", getRootRouter(app));

  // eror handler!
  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.status(500).json({ error: err.message || "Internal server error!" });
      return;
    }
  );
}
