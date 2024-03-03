const authRouter = require("./auth");
const proxyRouter = require("./proxy");

const Router = require("express");

const router = Router();

router.use("/auth", authRouter);
router.use("/proxy", proxyRouter);

module.exports = router;
