const { Router } = require("express")
const { addUser, userDelete, login, nameEdit, emailEdit, passwordEdit, findUsers } = require("../Controllers/userController");
const userRouter = Router();
const usersRoutes = userRouter

const { hashPassword, tokenCheck } = require("../middleware/index")

///---------login and register routes---------------------

//--get

// userRouter.get("/api/user/login", login);
// userRouter.get("/api/user/signup", [hashPassword], addUser);
//-- post
usersRoutes.post("/user/login", login);
// usersRoutes.post("/user/signup", [hashPassword], addUser);

//------------------ list users----------------------------
usersRoutes.get("/user", findUsers);



///-----------------update user info-----------------------
// usersRoutes.put("/user/editname", [tokenCheck],nameEdit)
// usersRoutes.put("/user/editemail", [tokenCheck], emailEdit)
// usersRoutes.put("/user/editpassword", [hashPassword, tokenCheck], passwordEdit)
// usersRoutes.put("/user/editphone", [tokenCheck], editPhone)



// // ---------------------- delete user ----------------------
// usersRoutes.delete("/user", [tokenCheck], userDelete);

module.exports = usersRoutes