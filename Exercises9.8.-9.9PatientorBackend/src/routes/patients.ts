import express from "express";
import service from "../services/patientService";
import { NonSensitivePatientEntry } from "../../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getNonSensitivePatientEntry());
});

router.post("/", (req, res) => {
  const { name, ssn, dateOfBirth, occupation, gender } = req.body;
  const data = { name, ssn, dateOfBirth, occupation, gender };
  const newPatient: NonSensitivePatientEntry = service.addPatient(data);
  console.log(newPatient);
  res.json(newPatient);
});

export default router;
