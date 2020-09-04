export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}
export type Diagnoses = Array<DiagnoseEntry>;
export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, "comment">;

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn?: string;
}

export type Patients = Array<PatientEntry>;
export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;
export type NewPatientEntry = Omit<PatientEntry, "id">;
