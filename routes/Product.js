const express = require("express");
const router = express.Router();

const addProduct_service = require("../services/addProduct");
const getAll_service = require("../services/getProduct");

//Verification of Request, NOTE!! Only the Auth Server is authorized the private routes
const verifyReq = require("../utils/verifyReq");

router.post("/add_product", verifyReq, async (req, res) => {
  const { productOBJ } = req.body;
  const productInfo = { user_id: req.user.user_id, ...productOBJ };
  const results = addProduct_service(productInfo);

  if (results) {
    res.status(200).send({ message: "Product Added Successfully" });
  } else {
    res.status(400).send({ message: "There was a problem adding the product" });
  }
});

router.get("/all", verifyReq, async (req, res) => {
  //Check if the request is valid
  if (req.verPass) {
    const results = await getAll_service();

    if (results) {
      res.status(200).send(results);
    } else {
      res.status(404).send({
        message: "No products found",
      });
    }
  }
});

module.exports = router;
