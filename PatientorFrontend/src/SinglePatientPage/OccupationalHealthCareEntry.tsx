import React from "react";
import { Card } from "semantic-ui-react";
import { OccupationalHealthcareEntry as OccupationalHealthCare } from "../types";

const OccupationalHealthCareEntry: React.FC<{
  entry: OccupationalHealthCare;
}> = ({ entry }) => {
  return (
    <Card>
      <p>{entry.date}</p>
      <p>{entry.description}</p>
      <p>{entry.employerName}</p>
    </Card>
  );
};

export default OccupationalHealthCareEntry;
