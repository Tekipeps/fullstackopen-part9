import patientData from "../../data/patients.json";
import { NonSensiitivePatientEntry, Patients } from "../../types";

const getNonSensitivePatientEntry = (): NonSensiitivePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, occupation, gender }) => ({
    id,
    name,
    dateOfBirth,
    occupation,
    gender,
  }));
};
const getAllEntries = (): Patients => {
  return patientData;
};

export default {
  getNonSensitivePatientEntry,
  getAllEntries,
};
