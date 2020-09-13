import React from "react";
import { HealthCheckEntry as HealthCheck } from "../types";
import { Icon } from "semantic-ui-react";

const HealthCheckEntry: React.FC<{ entry: HealthCheck }> = ({ entry }) => {
  return (
    <>
      <p>
        {entry.date} <Icon name="doctor" size="large" /> {entry.specialist}
      </p>
      <p>{entry.description}</p>
      {entry.healthCheckRating}
    </>
  );
};

export default HealthCheckEntry;
