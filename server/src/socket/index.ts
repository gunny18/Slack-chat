import { Server } from "socket.io";

export class SocketOperations {
  constructor(private io: Server) {}

  init() {
    this.io.on("connection", (socket) => {
      console.log("Connected to", socket.id);
    });
  }
}
