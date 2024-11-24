import { randomCirclePoint } from "random-location";
export default calcRadiusCoords = (target, difficulty) => {
  const difficultyRange = {
    Easy: 250,
    Medium: 500,
    Hard: 750,
  };
  return randomCirclePoint(target, difficultyRange[difficulty]);
};
