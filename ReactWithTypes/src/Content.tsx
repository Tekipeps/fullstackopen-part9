import React from "react";

interface Part {
  name: string;
  exerciseCount: number;
}

const Content: React.FC<{ parts: Array<Part> }> = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part, i) => (
        <p key={i}>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
