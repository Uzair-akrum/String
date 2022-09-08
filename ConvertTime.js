let current = "02:30",
  correct = "04:35";

current = Number(current.replace(":", ""));
correct = Number(correct.replace(":", ""));

console.log(" :", (correct - current) / 100);
