import express from "express";
import { getUserRouter } from "./user";
import { getGeneralRouter } from "./general";

export function getRootRouter(app: express.Application) {
  const router = express.Router();

  router.use(getGeneralRouter(app));
  router.use("/user", getUserRouter(app));

  return router;
}
