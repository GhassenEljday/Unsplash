var jwt = require("jsonwebtoken");
const userService = require("../services/user.service");

const athentication = (req, res, next) => {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, payload) => {
    try {
      if (err) {
        throw err;
      }
      const user = await userService.getUserByUsername(payload.username);
      req.user = user;
      next();
    } catch (err) {
      res.sendStatus(403);
    }
  });
};

module.exports = athentication;
