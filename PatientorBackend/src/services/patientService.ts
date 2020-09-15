import patientData from "../../data/patients";
import { v4 as uuid } from "uuid";
import {
  PublicPatient,
  Patients,
  Patient,
  NewPatient,
  Entry,
  NewEntry,
} from "../types";

const stickyData: Patients = [...patientData];

const getPublicPatients = (): PublicPatient[] => {
  return patientData.map(({ id, name, dateOfBirth, occupation, gender }) => ({
    id,
    name,
    dateOfBirth,
    occupation,
    gender,
  }));
};

const addPatient = (data: NewPatient): PublicPatient => {
  const newEntry: Patient = {
    ...data,
    entries: [],
    id: Math.round(Math.random() * 100000000).toString(),
  };
  stickyData.push(newEntry);
  const { dateOfBirth, name, gender, occupation, id } = newEntry;
  return { id, dateOfBirth, name, gender, occupation };
};

const getPatient = (id: string): Patient | undefined => {
  const data = stickyData.find((patient) => patient.id === id);
  return data;
};

const addEntry = (id: string, newEntry: NewEntry): Entry => {
  const date = new Date();
  const entry = {
    id: uuid(),
    ...newEntry,
    date: date.toDateString(),
  };
  stickyData.map((p) => {
    if (p.id === id) {
      return { ...p, entries: [...p.entries, entry] };
    }
    return p;
  });
  return entry;
};

export default {
  getPublicPatients,
  addPatient,
  getPatient,
  addEntry,
};
