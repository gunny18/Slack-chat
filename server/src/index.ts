import { config } from "dotenv";
import path from "node:path";
config({ path: path.join(__dirname, "..", ".env") });

import { createServer } from "node:http";
import express from "express";
import { connectDb } from "./data/connection";
import { Server } from "socket.io";
import { WHITELIST } from "./constants";
import { initApi } from "./api";

const PORT = process.env.PORT || 8000;

async function initApp() {
  //connect to DB
  await connectDb();

  // init express app and HTTP server instance
  const app = express();
  const server = createServer(app);

  // create a socket IO server
  const io = new Server(server, {
    cors: {
      origin: WHITELIST,
      credentials: true,
    },
  });

  server.listen(PORT, () => console.log("Listening on port", PORT));

  initApi(io, app);
}

initApp();
