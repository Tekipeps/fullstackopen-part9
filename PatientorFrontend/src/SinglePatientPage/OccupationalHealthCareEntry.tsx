import React from "react";
import { Card } from "semantic-ui-react";
import { OccupationalHealthcareEntry as OccupationalHealthCare } from "../types";

const OccupationalHealthCareEntry: React.FC<{
  entry: OccupationalHealthCare;
}> = ({ entry }) => {
  return (
    <Card>
      <p>
        {entry.date} {entry.employerName}
      </p>
      <p>{entry.description}</p>
      <p></p>
    </Card>
  );
};

export default OccupationalHealthCareEntry;
