import patientData from "../../data/patients";
import { PublicPatient, Patients, Patient, NewPatient } from "../types";

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

export default {
  getPublicPatients,
  addPatient,
  getPatient,
};
