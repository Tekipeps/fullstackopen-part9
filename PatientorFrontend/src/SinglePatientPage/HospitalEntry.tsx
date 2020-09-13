import React from "react";
import { Icon } from "semantic-ui-react";
import { HospitalEntry as Hospital } from "../types";

const HospitalEntry: React.FC<{ entry: Hospital }> = ({ entry }) => {
  return (
    <>
      <p>
        {entry.date} <Icon name="hospital" size="large" /> {entry.specialist}
      </p>
      <p>{entry.description}</p>
      {entry.discharge.date}
    </>
  );
};

export default HospitalEntry;
