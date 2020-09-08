import React from "react";
import { CoursePart } from "../types";
import { assertNever } from "../utils";

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.description}
        </p>
      );
    case "Deeper type usage":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.exerciseSubmissionLink}{" "}
          {part.description}
        </p>
      );
    case "Using props to pass data":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.groupProjectCount}
        </p>
      );
    case "Tekipeps tutorial":
      return (
        <p>
          {part.name} {part.exerciseCount} {part.description} {part.reports}
        </p>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
