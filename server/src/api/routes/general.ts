import express from "express";

export function getGeneralRouter(app: express.Application) {
  const router = express.Router();

  router.get("/health", (req: express.Request, res: express.Response) => {
    res.status(200).json({
      status: "OK",
      upTime: process.uptime(),
    });
    return;
  });

  return router;
}
