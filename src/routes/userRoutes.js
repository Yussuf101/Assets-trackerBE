const { Router } = require("express")
const { addUser, userDelete, login, nameEdit, emailEdit, passwordEdit, findUsers } = require("../Controllers/userController")
const { hashPassword, tokenCheck } = require("../middleware/index")
const userRouter = Router();

///---------login and register routes---------------------

//--get
userRouter.get("/user/login", login);
userRouter.get("/user/signup", [hashPassword], addUser);
//-- post
userRouter.post("/user/login", login);
userRouter.post("/user/signup", [hashPassword], addUser);

//------------------ list users----------------------------
userRouter.get("/user", findUsers);



///-----------------update user info-----------------------
userRouter.put("/user/editname", [tokenCheck],nameEdit)
userRouter.put("/user/editemail", [tokenCheck], emailEdit)
userRouter.put("/user/editpassword", [hashPassword, tokenCheck], passwordEdit)
userRouter.put("/user/editphone", [tokenCheck], editPhone)



// // ---------------------- delete user ----------------------
userRouter.delete("/user", [tokenCheck], userDelete);


module.exports = userRouter