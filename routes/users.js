var express = require("express");

var router = express.Router();

router.use("/", (req, res, next) => {
  req.headers["content-type"] = "application/json";
  console.log("API call recieved");
  next();
});

router.get("/", (req, res, next) => {
  res.send("Headers Recieved" + req.headers["content-type"]);
  res.send("get request for users");
  next();d
});

router.use("/", (req, res) => {
  console.log("API call ended");
});

router.get("/user-details/:id", (req, res) => {
  res.send("get request for specific user" + req.params.id);
});

router.get("/search-by-location/:state/:city", (req, res) => {
  res.send(
    "get request for specific user" + req.params.state + req.params.city
  );
});

router.get("/search/:key([0-9]{4})", (req, res) => {
  res.send("Data captured is " + req.params.key);
});
router.get("/search-username/:key([a-zA-z]{5})", (req, res) => {
  res.send("Data captured is " + req.params.key);
});

router.get("*", (req, res) => {
  var resObj = {
    statusCode: 404,
    statusMsg: "URL not found",
  };

  res.send(resObj);
});

router.post("/create-user", (req, res) => {
  res.send("List");
});
router.put("/update-user", (req, res) => {
  res.send("List");
});
router.get("/read-users", (req, res) => {
  res.send("List");
});
router.get("/get-user-details", (req, res) => {
  const userObj = {
    id: 10,
    name: "ARC",
    lastName: "Tut",
    status: true,
  };
  res.send(userObj);
});
router.delete("/delete-user", (req, res) => {
  res.send("List");
});

module.exports = router;
