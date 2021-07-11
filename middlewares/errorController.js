module.exports = (err, req, res, next) => {
  try {
    console.log(err);
    res.send(err);
  } catch (err) {
    res.status(500).send("An unknown error occurred.");
  }
};
