interface BmiValues {
  height: number;
  weight: number;
}
export const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length === 2) {
    if (isNaN(Number(args[0])) || isNaN(Number(args[1])))
      throw new Error("malformatted parameters");
    return {
      height: Number(args[0]),
      weight: Number(args[1]),
    };
  }
  if (args.length < 4) throw new Error("Too few arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Values provided are not numbers");
  }
};

export const calculateBmi = (data: BmiValues): string => {
  const bmi = data.weight / (data.height / 100) ** 2;
  if (bmi < 15) {
    return "Very severely underweight	";
  } else if (bmi < 16) {
    return "Severely underweight";
  } else if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi < 30) {
    return "Overweight";
  } else if (bmi < 35) {
    return "Obese Class I (Moderately obese)";
  } else if (bmi < 40) {
    return "Obese Class II (Severely obese)";
  } else {
    return "Obese Class III (Very severely obese)";
  }
};

if (require.main === module) {
  console.log(calculateBmi(parseArguments(process.argv)));
}
