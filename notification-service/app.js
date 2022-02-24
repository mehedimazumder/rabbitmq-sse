const express = require("express");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const http = require("http");
const mqService = require("./lib/mqService");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const publishToQueue = mqService();

let clients = [];
let notifications = [];

app.post("/api/send-notification", async (req, res) => {
  try {
    const userProfile = await axios.get(
      `http://localhost:8081/user-info/${req.body.id}`
    );
    publishToQueue(
      "send_noti",
      Buffer.from(
        JSON.stringify({
          ...userProfile.data,
          message: req.body.message,
        })
      )
    );
    // await publishToQueue("send_noti", "fuckkkkkkkkkkkkkkk!!!!!!!!!!!");
    return res.send("User will be notified shortly!");
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
});

function eventshandler(req, res, next) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };

  res.writeHead(200, headers);

  const data = `data : ${JSON.stringify(
    notifications.filter((n) => n.id === req.query.id)
  )}\n\n`;
  notifications = notifications.filter((n) => n.id !== req.query.id);

  res.write(data);

  typeof clients.find((c) => c.id === req.query.id) === "undefined" &&
    clients.push({ id: req.query.id, res });

  req.on("close", () => {
    clients = clients.filter((c) => c.id !== req.query.id);
  });
}

app.get("/api/events", eventshandler);

app.get("/api/status", (request, response) =>
  response.json({ clients: clients.length })
);

const server = http.createServer(app);
server.listen(3008, () => {
  console.log(`Profile App is listening on *:${3008}`);
});

function insert(data) {
  // notifications.push(data);
  let client = clients.find((c) => c.id === data.id);
  if (client) {
    client.res.write(`data: ${JSON.stringify(data)}\n\n`);
  }
}

module.exports = { insert };
