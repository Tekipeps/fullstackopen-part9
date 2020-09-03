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
    return { rating: 1, ratingDescription: "very poor try harder" };
  } else if (average < target) {
    return { rating: 2, ratingDescription: "not too bad but could be better" };
  } else {
    return { rating: 3, ratingDescription: "Excellent! good job" };
  }
};
const calculateExercises = (hours: Array<number>, target: number): Result => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
