import express from "express";
import { createNamespace } from "../controllers/namespace";

export function getNamespaceRouter(app: express.Application) {
  const router = express.Router();

  router.post(
    "/create",
    async (req: express.Request, res: express.Response) => {
      try {
        const { name, imageURL, endpoint } = req.body;
        const ns = await createNamespace(name, imageURL, endpoint);
        res.status(200).json({ namespace: ns });
        return;
      } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message });
        return;
      }
    }
  );

  return router;
}
