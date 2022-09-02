const express = require("express");
const { authorize } = require("@liveblocks/node");
const cors = require("cors");

const secret = "sk_live_NTHEymXlDYNtU28W6EBbC2jB";

const app = express();
app.use(cors());

app.use(express.json());

app.post("/api/auth", (req, res) => {
  //   console.log("Received auth request", req.body);
  /**
   *
   * Implement your own security here.
   *
   * It's your responsibility to ensure that the caller of this endpoint
   * is a valid user by validating the cookies or authentication headers
   * and that it has access to the requested room.
   */
  authorize({
    room: req.body.room,
    secret,
    // userId: "123", // Optional
    userInfo: {
      // Optional
      name: req.body.name,
      //   name: NAMES[Math.floor(Math.random() * NAMES.length)],
    },
  })
    .then((authResponse) => {
      res.send(authResponse.body);
    })
    .catch((er) => {
      res.status(403).end();
    });
});

app.listen("4545", () => {
  //   console.log("listening on port 4545");
});
