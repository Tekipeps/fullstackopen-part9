import diagnoseData from "../../data/diagnoses.json";
import { Diagnosis } from "../types";

const getAllEntries = (): Diagnosis[] => {
  return diagnoseData;
};

const getSingleEntry = (code: string): Diagnosis | undefined => {
  return diagnoseData.find((d) => d.code === code);
};

export default {
  getSingleEntry,
  getAllEntries,
};
