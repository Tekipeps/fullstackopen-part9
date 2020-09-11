/* eslint-disable @typescript-eslint/no-explicit-any */

import { NewPatient, Gender } from "./types";

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

export const toDiagnoseCode = (code: any): string => {
  if (!code || !isString(code)) {
    throw new Error(`Cannot find a diagnosis with the code: ${code}`);
  }
  return code;
};

export const toNewPatient = (object: any): NewPatient => {
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
  const parseName = (name: any): string => {
    if (!name || !isString(name)) {
      throw new Error("Invalid or missing name: " + name);
    }
    return name;
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
  return {
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
    name: parseName(object.name),
    occupation: parseOccupation(object.occupation),
    ssn: parseSsn(object.ssn),
    entries: [],
  };
};
