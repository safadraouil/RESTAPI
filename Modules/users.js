let mongoose = require("mongoose");
let UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: false
  },
  UserTel: {
    type: Number,
    required: false
  },
  UserMail: {
    type: String,
    required: false
  }
});
module.exports = mongoose.model("UserModel", UserSchema);
/* 
let user = new UserModel({
  UserName: "safa",
  UserTel: "+216123456",
  UserMail: "safa@gmail.com",
});

user
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

 Create Many Records with model.create()
const arrayOfUser = [
  {
    UserName: "safa1",
    UserTel: "+216123456",
    UserMail: "safa@gmail.com",
  },
  {
    UserName: "safa2",
    UserTel: "+2161234567",
    UserMail: "safa@gmail.com",
  },
  { UserName: "safa3", UserTel: "+2161234568", UserMail: "safa@gmail.com" },

  { UserName: "safa4", UserTel: "+2161234567", UserMail: "safa@gmail.com" },
  { UserName: "safa5", UserTel: "+2161234569", UserMail: "safa@gmail.com" },
];

UserModel.create(arrayOfUser)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
 */
