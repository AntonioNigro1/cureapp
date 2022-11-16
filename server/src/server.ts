import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
interface joinRoomData {
  room: number;
  id: string;
  name: string;
  signalData: any;
}

io.on("connection", (socket: any) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("joinRoom", (data: joinRoomData) => {
    io.join(data.room);
    io.to(data.room).emit("userJoined", { signal: data.signalData });
  });
});

server.listen(5000, () => console.log("server is running at port 5000..."));
