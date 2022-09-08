let s = "badc",
  t = " baba";
let set1 = new Map(),
  set2 = new Map(),
  count = 0;
for (let i = 0; i < s.length; i++) {
  if (!set1.has(s[i])) {
    set1.set(s[i], t[i]);
  } else {
    
    if (set1.get(s[i]) !== t[i]) {
      count++;
    }
  }
}
for (let i = 0; i < t.length; i++) {
  if (!set2.has(t[i])) {
    set2.set(t[i], s[i]);
  } else {
    if (set2.get(t[i]) !== s[i]) {
      count++;
    }
  }
}
console.log(" :", count);
