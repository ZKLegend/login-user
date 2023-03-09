const middlewareC = require("../controllers/middlewareC")
const userC = require("../controllers/userC")

const router = require("express").Router()

router.get("/",middlewareC.verifyToken, userC.getAllUser)
router.delete("/:id", middlewareC.verifyTokenAndAdminAuth,userC.deleteUser)


module.exports = router