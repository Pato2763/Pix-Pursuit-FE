import { patchPursuit } from "../api";

const calcTimer = (targetDate, pursuit_id) => {
  const targetTime = new Date(targetDate).getTime();
  const now = Date.now();
  const futureTime = targetTime + 24 * 60 * 60 * 1000;
  const remainingTime = futureTime - now;

  if (remainingTime <= 0) {
    patchPursuit(pursuit_id).then(() => {});
    return "Pursuit timer expired!";
  }

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return `${hours}h ${minutes}m ${seconds}s remaining on your Pursuit.`;
};

export default calcTimer;
