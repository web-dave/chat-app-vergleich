import { io } from "socket.io-client";

class SocketioService {
  socket;

  setupSocketConnection() {
    this.socket = io("http://localhost:4000");

    this.socket.on("my broadcast", (data) => {
      console.log(data);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
