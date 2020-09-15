/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  NewPatient,
  Gender,
  NewBaseEntry,
  Diagnosis,
  EntryType,
  Discharge,
  HealthCheckRating,
  NewEntry,
} from "./types";

export const assertNever = (_any: never): never => {
  throw new Error("Exhaustive type checking violated");
};

const isString = (data: any): boolean => {
  return typeof data === "string" || data instanceof String;
};

const canBeNum = (data: any): boolean => {
  return !isNaN(Number(data));
};
const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date));
};
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};
export const isId = (param: any): string => {
  if (!param || !isString(param)) {
    throw new Error("Invalid id");
  }
  return param;
};
const isArrayOfStrings = (param: any[]): param is string[] => {
  const hasNonString = param.some((item) => {
    return !isString(item);
  });

  return !hasNonString;
};
const isHealthCheckRating = (param: any): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};
const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};
const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Invalid or missing gender: " + gender);
  }
  return gender;
};
const parseOccupation = (occupation: any) => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Invalid or missing occupation: " + occupation);
  }
  return occupation;
};
const parseSsn = (ssn: any): string => {
  if (ssn && !canBeNum(ssn)) {
    throw new Error("Invalid ssn");
  }
  return ssn;
};
const parseString = (value: any): string => {
  if (!value || !isString(value)) {
    throw new Error("Invalid or missing value: " + value);
  }
  return value;
};

const parseDiagnosisCodes = (codes: any): Array<Diagnosis["code"]> => {
  if (!Array.isArray(codes) || !isArrayOfStrings(codes)) {
    throw new Error("Invalid or missing diagnosis codes: " + codes);
  }
  return codes;
};
const parseEntryType = (type: any): EntryType => {
  if (!Object.values(EntryType).includes(type)) {
    throw new Error("Invalid or missing type: " + type);
  }
  return type;
};
const parseHealthCheckRating = (value: any): HealthCheckRating => {
  if (!value || !isHealthCheckRating(value)) {
    throw new Error("Invalid or missing healthCheckRating: " + value);
  }
  return value;
};
const parseDischarge = ({ date, criteria }: any): Discharge => {
  if (!date || !isDate(date) || !criteria || !isString(criteria)) {
    throw new Error("Invalid date or criteria in discharge: ");
  }
  return { date, criteria };
};
const parseSickLeave = ({ startDate, endDate }: any) => {
  if (!startDate || !isString(startDate) || !endDate || !isString(endDate)) {
    throw new Error(`Invalid date value sickLeave: ${startDate} ${endDate}`);
  }
  return { startDate, endDate };
};
export const toNewPatient = (object: any): NewPatient => {
  return {
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
    name: parseString(object.name),
    occupation: parseOccupation(object.occupation),
    ssn: parseSsn(object.ssn),
    entries: [],
  };
};

export const toNewBaseEntry = (object: any): NewBaseEntry => {
  const newBaseEntry: NewBaseEntry = {
    type: parseEntryType(object.type),
    description: parseString(object.description),
    specialist: parseString(object.specialist),
  };
  if (object.diagnosisCodes) {
    newBaseEntry.diagnosisCodes = parseDiagnosisCodes(object.diagnosisCodes);
  }
  return newBaseEntry;
};

export const toNewEntry = (object: any): NewEntry => {
  const newBaseEntry = toNewBaseEntry(object) as NewEntry;

  switch (newBaseEntry.type) {
    case EntryType.HealthCheck:
      return {
        ...newBaseEntry,
        type: EntryType.HealthCheck,
        healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
      };
    case EntryType.Hospital:
      return {
        ...newBaseEntry,
        type: EntryType.Hospital,
        discharge: parseDischarge(object.discharge),
      };
    case EntryType.OccupationalHealthCare:
      const data: NewEntry = {
        ...newBaseEntry,
        type: EntryType.OccupationalHealthCare,
        employerName: parseString(object.employerName),
      };
      if (object.sickLeave) {
        data.sickLeave = parseSickLeave(object.sickLeave);
      }
      return data;
    default:
      return assertNever(newBaseEntry);
  }
};
