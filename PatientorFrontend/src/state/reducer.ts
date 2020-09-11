import { State } from "./state";
import { Patient, SinglePatient } from "../types";

export type Action =
  | {
      type: "ADD_SINGLE_PATIENT";
      payload: SinglePatient;
    }
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    };

export const setPatientList = (data: Patient[]): Action => {
  return { type: "SET_PATIENT_LIST", payload: data };
};

export const addPatient = (data: Patient): Action => {
  return { type: "ADD_PATIENT", payload: data };
};

export const addSinglePatient = (data: SinglePatient): Action => {
  return { type: "ADD_SINGLE_PATIENT", payload: data };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case "ADD_SINGLE_PATIENT":
      return {
        ...state,
        singlePatients: {
          ...state.singlePatients,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
