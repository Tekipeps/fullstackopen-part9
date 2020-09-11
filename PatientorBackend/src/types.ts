export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}
export type Diagnoses = Array<DiagnoseEntry>;
export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, "comment">;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Entry {}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}

export type PublicPatient = Omit<Patient, "ssn" | "entries">;

export type Patients = Array<Patient>;
export type NewPatient = Omit<Patient, "id">;
