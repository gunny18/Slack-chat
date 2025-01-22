import express from "express";
import { loginUser, registerUser } from "../controllers/user";

export function getUserRouter(app: express.Application) {
  const router = express.Router();

  router.post(
    "/register",
    async (req: express.Request, res: express.Response) => {
      try {
        const { username, email, password } = req.body;
        // logic controller!
        const user = await registerUser(username, email, password);
        res.status(200).json({
          user,
        });
        return;
      } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message });
        return;
      }
    }
  );

  router.post("/login", async (req: express.Request, res: express.Response) => {
    try {
      const { email, password } = req.body;
      // logic controller!
      const user = await loginUser(email, password);
      res.status(200).json({
        user,
      });
      return;
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
      return;
    }
  });

  return router;
}
