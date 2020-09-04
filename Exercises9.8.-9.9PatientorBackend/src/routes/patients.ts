import express from "express";
import service from "../services/patientService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getNonSensitivePatientEntry());
});

export default router;
