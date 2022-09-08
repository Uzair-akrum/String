let num = "239537672423884969653287101",
  max = 0;

console.log(" :", +num & 1);
for (let i = num.length - 1; i >= 0; i--) {
  // +num[i] converts string into number like parseInt(num[i])
  if (+num[i] % 2) {
    console.log(" :", num.slice(0, i + 1));
  }
}

console.log(" :", max);
