import React from "react";
import { Entry } from "../types";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthCareEntry from "./OccupationalHealthCareEntry";

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthCareEntry entry={entry} />;
    case "HealthCheck":
      return null;
    default:
      return null;
  }
};

export default EntryDetails;
