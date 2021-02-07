require("dotenv").config();

const verifyReq = (req, res, next) => {
  const { access_key } = req.body;
  console.log(req.header.origin);
  if (access_key && process.env.API_ACCESS_KEY === access_key) {
    req.verPass = true;
    next();
  } else {
    res.status(401).send({ message: "Unauthorized Access" });
  }
};

module.exports = verifyReq;
