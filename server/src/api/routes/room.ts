import express from "express";
import { createRoom } from "../controllers/room";

export function getRoomRouter(app: express.Application) {
  const router = express.Router();

  router.post(
    "/create",
    async (req: express.Request, res: express.Response) => {
      try {
        const { name, imageURL, namespaceId } = req.body;
        const data = await createRoom(name, imageURL, namespaceId);
        res.status(200).json(data);
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
