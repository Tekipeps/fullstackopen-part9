import express from "express";
import service from "../services/patientService";
import { NonSensitivePatientEntry, NewPatientEntry } from "../../types";
import { toNewPatientEntry } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getNonSensitivePatientEntry());
});

router.post("/", (req, res) => {
  try {
    const { name, ssn, dateOfBirth, occupation, gender } = toNewPatientEntry(
      req.body
    );
    const data: NewPatientEntry = {
      name,
      ssn,
      dateOfBirth,
      occupation,
      gender,
    };
    const newPatient: NonSensitivePatientEntry = service.addPatient(data);
    res.json(newPatient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
