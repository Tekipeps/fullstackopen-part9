import express from "express";
import service from "../services/diagnoseService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getAllEntries());
});

export default router;
