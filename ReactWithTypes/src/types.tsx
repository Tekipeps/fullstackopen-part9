export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartFour {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartFour {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartBase {
  description: string;
}

interface CustomCoursePart extends CoursePartFour {
  name: "Tekipeps tutorial";
  reports: number;
}

export type CoursePart =
  | CustomCoursePart
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree;
