let paths = [
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
];
for (let i = 0; i < paths.length; i++) {
  for (let j = 0; j < paths[i].length; j++) {
    if (paths[i + 1] !== undefined) {
      console.log(" :", paths[i][j]);
      if (paths[i][j] == paths[i + 1][j]) {
        console.log(" :", paths[i][j]);
      }
    }
  }
}
