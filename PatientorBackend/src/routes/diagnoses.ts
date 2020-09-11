import express from "express";
import service from "../services/diagnoseService";
import { toDiagnoseCode } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getAllEntries());
});

router.get("/:code", (req, res) => {
  try {
    const { code } = req.params;
    const newCode = toDiagnoseCode(code);
    const diagnose = service.getSingleEntry(newCode);

    if (!diagnose) {
      return res.json({ error: "Cannot find this diagnosis" });
    }
    return res.json(diagnose);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

export default router;
