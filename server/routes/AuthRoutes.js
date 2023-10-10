import { Router } from "express";
import { checkUser } from "../controllers/AuthController.js";

const router = Router();
router.post("/check-user", (req,res) => {
    res.send(req.body);
});
router.get("/tryOut", (req,res) => {
    res.send("Server Working Fine")
})
export default router;
