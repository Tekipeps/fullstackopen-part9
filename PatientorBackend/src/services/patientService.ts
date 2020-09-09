import patientData from "../../data/patients.json";
import {
  NonSensitivePatientEntry,
  Patients,
  PatientEntry,
  NewPatientEntry,
} from "../../types";

const stickyData: Patients = [...patientData];

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, occupation, gender }) => ({
    id,
    name,
    dateOfBirth,
    occupation,
    gender,
  }));
};

const addPatient = (data: NewPatientEntry): NonSensitivePatientEntry => {
  const newEntry: PatientEntry = {
    ...data,
    id: Math.round(Math.random() * 100000000).toString(),
  };
  stickyData.push(newEntry);
  const { dateOfBirth, name, gender, occupation, id } = newEntry;
  return { id, dateOfBirth, name, gender, occupation };
};

const getPatient = (id: string): PatientEntry | undefined => {
  const data = stickyData.find((patient) => patient.id === id);
  return data;
};

export default {
  getNonSensitivePatientEntry,
  addPatient,
  getPatient,
};
