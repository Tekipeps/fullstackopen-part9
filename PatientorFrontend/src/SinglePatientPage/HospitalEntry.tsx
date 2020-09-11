import React from "react";
import { Card } from "semantic-ui-react";
import { HospitalEntry as Hospital } from "../types";

const HospitalEntry: React.FC<{ entry: Hospital }> = ({ entry }) => {
  return (
    <Card>
      <p>{entry.date}</p>
      <p>{entry.description}</p>
      {entry.discharge}

      {/* <Icon as="heart" /> */}
    </Card>
  );
};

export default HospitalEntry;