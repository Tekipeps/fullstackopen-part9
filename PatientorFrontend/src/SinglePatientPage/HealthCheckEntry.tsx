import React from "react";
import { HealthCheckEntry as HealthCheck } from "../types";

const HealthCheckEntry: React.FC<{ entry: HealthCheck }> = ({ entry }) => {
  return (
    <>
      <p>{entry.date}</p>
      <p>{entry.description}</p>
      {entry.healthCheckRating}
    </>
  );
};

export default HealthCheckEntry;
