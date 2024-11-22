export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
