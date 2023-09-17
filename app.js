const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const mongoose = require("mongoose");
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});
//start mongoose server
mongoose.connect(
  process.env.MONGO_URL ||
    "mongodb+srv://test-db:@test-db.hyppdus.mongodb.net/",
  { useNewUrlParser: true }
);
//check connection with mongoose server
const con = mongoose.connection;
con.on("open", () => {
  console.log("Connected");
});

io.on("connection", (socket) => {
  socket.on("new-chat", (data) => {
    console.log(data);
    socket.broadcast.emit("new-chat", data);
  });
  // socket.on("join-room", (data) => {
  //   console.log("userName", data.userName);
  //   socket.broadcast.emit("new-user", data);
  // });
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
//import enities
const userRouter = require("./routers/users");
const chatRouter = require("./routers/chats");
const loginRouter = require("./routers/login");
const adminLoginRouter = require("./routers/admin-login");
const quizRouter = require("./routers/quiz");
const quizAnalyticsRouter = require("./routers/quiz-analytics");
const broadcastRouter = require("./routers/broadcast");
//mention entities path to listen
app.use("/users", userRouter);
app.use("/chats", chatRouter);
app.use("/login", loginRouter);
app.use("/admin-login", adminLoginRouter);
app.use("/quiz", quizRouter);
app.use("/quiz-analytics", quizAnalyticsRouter);
app.use("/broadcast", broadcastRouter);
http.listen(3000, () => {
  console.log("listening on *:3000");
});
