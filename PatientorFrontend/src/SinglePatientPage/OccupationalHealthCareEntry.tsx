import React from "react";
import { Icon } from "semantic-ui-react";
import { OccupationalHealthcareEntry as OccupationalHealthCare } from "../types";

const OccupationalHealthCareEntry: React.FC<{
  entry: OccupationalHealthCare;
}> = ({ entry }) => {
  return (
    <>
      <p>
        {entry.date} <Icon name={"stethoscope"} /> {entry.employerName}
      </p>
      <p>{entry.description}</p>
    </>
  );
};

export default OccupationalHealthCareEntry;
