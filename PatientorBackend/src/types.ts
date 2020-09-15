export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
export enum EntryType {
  HealthCheck = "HealthCheck",
  OccupationalHealthCare = "OccupationalHealthcare",
  Hospital = "Hospital",
}

export interface BaseEntry {
  type: EntryType;
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}
export interface Discharge {
  date: string;
  criteria: string;
}

interface HealthCheckEntry extends BaseEntry {
  type: EntryType.HealthCheck;
  healthCheckRating: HealthCheckRating;
}
interface OccupationalHealthcareEntry extends BaseEntry {
  type: EntryType.OccupationalHealthCare;
  employerName: string;
  sickLeave?: { startDate: string; endDate: string };
}
interface HospitalEntry extends BaseEntry {
  type: EntryType.Hospital;
  discharge: Discharge;
}
export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

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

export type NewBaseEntry = Omit<BaseEntry, "id" | "date">;
export type NewEntry =
  | Omit<HealthCheckEntry, "id" | "date">
  | Omit<HospitalEntry, "id" | "date">
  | Omit<OccupationalHealthcareEntry, "id" | "date">;
