var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("get request for products");
});
router.post("/create-product", (req, res) => {
  res.send("List");
});
router.put("/update-product", (req, res) => {
  res.send("List");
});
router.get("/read-products", (req, res) => {
  res.send("List");
});
router.get("/get-product-details", (req, res) => {
  const userObj = {
    id: 10,
    name: "ARC",
    lastName: "Tut",
    status: true,
  };
  res.send(userObj);
});
router.delete("/delete-product", (req, res) => {
  res.send("List");
});

module.exports = router;
