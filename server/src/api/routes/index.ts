import express from "express";
import { getUserRouter } from "./user";
import { getGeneralRouter } from "./general";
import { getNamespaceRouter } from "./namespace";
import { getRoomRouter } from "./room";

export function getRootRouter(app: express.Application) {
  const router = express.Router();

  router.use(getGeneralRouter(app));
  router.use("/user", getUserRouter(app));
  router.use("/namespace", getNamespaceRouter(app));
  router.use("/room", getRoomRouter(app));

  return router;
}
