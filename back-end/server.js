require("dotenv");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(express.json()); //built-in middleware
app.use(cors()); //third-party middleware

const rolesRouter = require("./routers/routes/rolesRouter");
const paymentsRouter = require("./routers/routes/paymentRouter");
const usersRouter = require("./routers/routes/usersRouter");
const loginRouter = require("./routers/routes/loginRouter");
const itemsRouter = require("./routers/routes/itemsRouter");
const favoritesUsersRouter = require("./routers/routes/favoritesUsersRouter");
const bidsRouter = require("./routers/routes/bidsRouter");
const auctionsRouter = require("./routers/routes/auctionRouter");
const contactRouter = require("./routers/routes/contactRouter");
const stripeRouter = require("./routers/routes/stripeRouter");

//Routers
app.use("/roles", rolesRouter);
app.use("/payments", paymentsRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/items", itemsRouter);
app.use("/favUsers", favoritesUsersRouter);
app.use("/bids", bidsRouter);
app.use("/auctions", auctionsRouter);
app.use("/contact", contactRouter);
app.use("/pay", stripeRouter);

const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(`${socket.id} is connected`);
  socket.emit("yourId", socket.id);
  socket.on("bid", (data) => {
    console.log("data", data);
    io.emit("broadcast", data);
  });
});
server.listen(PORT, () => {
  console.log(`app listen at ${PORT} `);
});
