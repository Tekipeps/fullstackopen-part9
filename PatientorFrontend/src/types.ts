export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

interface Entry {}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export interface SinglePatient extends Patient {
  ssn: string;
  entries: Entry[];
}
