import diagnoseData from "../../data/diagnoses.json";
import { Diagnoses } from "../types";

const getAllEntries = (): Diagnoses => {
  return diagnoseData;
};

export default {
  getAllEntries,
};
