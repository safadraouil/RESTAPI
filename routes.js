//import users from "./Modules/users";
const express = require("express");
const Users = require("./Modules/users"); // new
const router = express.Router();

//Get Methode
router.get("/allUsers", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});
//Post Method
router.post("/addUsers", async (req, res) => {
  const users = new Users({
    UserName: req.body.UserName,
    UserTel: req.body.UserTel,
    UserMail: req.body.UserMail
  });

  await users.save();
  res.send(users);
});
// put
router.put("/EditUser/:UserName", async (req, res) => {
  try {
    const user = await Users.find({ UserName: req.params.UserName })
      .then((res) => console.log("OOOOOOOK", res))
      .catch((err) => console.log(err));

    user.UserName = req.body.UserName;

    await user.save();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

// delete

router.delete("/deletUser/:UserMail", async (req, res) => {
  try {
    await Users.delete({ UserMail: req.params["UserMail"] });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});
module.exports = router;
