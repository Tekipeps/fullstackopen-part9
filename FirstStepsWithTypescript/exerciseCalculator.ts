interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Rating {
  rating: number;
  ratingDescription: string;
}

const rate = (average: number, target: number): Rating => {
  if (average < target / 2) {
    return { rating: 1, ratingDescription: "bad" };
  } else if (average < target) {
    return { rating: 2, ratingDescription: "not too bad but could be better" };
  } else {
    return { rating: 3, ratingDescription: "Excellent! good job" };
  }
};
export const calculateExercises = (
  hours: Array<number>,
  target: number
): Result => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((hour) => hour !== 0).length;
  const average =
    hours.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / periodLength;
  const success: boolean = average > target;
  const rating = rate(average, target);
  return {
    periodLength,
    trainingDays,
    success,
    rating: rating.rating,
    ratingDescription: rating.ratingDescription,
    target,
    average,
  };
};
const parseInput = (args: Array<string>): Array<number> => {
  if (args.length < 3) throw new Error("Too few arguments");
  const parsedArr = args.slice(2).map((a) => {
    if (isNaN(Number(a))) throw new Error("Invalid input, number required");
    return Number(a);
  });
  return parsedArr;
};
// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
if (require.main === module) {
  const input = process.argv;
  const arr = parseInput(input);
  console.log(calculateExercises(arr.slice(1), arr[0]));
}
