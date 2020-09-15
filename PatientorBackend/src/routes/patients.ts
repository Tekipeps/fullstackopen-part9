import express from "express";
import service from "../services/patientService";
import { PublicPatient, NewPatient, Patient, NewEntry } from "../types";
import { toNewPatient, isId, toNewEntry } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(service.getPublicPatients());
});

router.post("/", (req, res) => {
  try {
    const {
      name,
      ssn,
      dateOfBirth,
      occupation,
      gender,
      entries,
    } = toNewPatient(req.body);
    const data: NewPatient = {
      name,
      ssn,
      dateOfBirth,
      occupation,
      gender,
      entries,
    };
    const newPatient: PublicPatient = service.addPatient(data);
    res.json(newPatient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  const validId = isId(req.params.id);
  const data = service.getPatient(validId);
  if (!data) {
    return res
      .status(400)
      .json({ error: "person with this id does not exist" });
  }
  const {
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    ssn,
    entries,
  }: Patient = data;
  return res.send({ id, name, dateOfBirth, gender, occupation, ssn, entries });
});

router.post("/:id/entries", (req, res) => {
  const { id } = req.params;
  try {
    const newEntry: NewEntry = toNewEntry(req.body);
    const addedEntry = service.addEntry(id, newEntry);

    res.json(addedEntry);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
