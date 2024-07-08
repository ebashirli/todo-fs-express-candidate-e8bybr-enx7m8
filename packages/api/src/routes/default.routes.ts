import Express from "express";
const router = Express.Router();

router.get("/", (_req, res) => res.send("Good Luck!"));

export default router;
