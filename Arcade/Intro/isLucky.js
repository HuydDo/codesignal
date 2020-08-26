function isLucky(n) {
  let str = n+"", a1 = [], a2 = [];
  for(let o of str.substr(0, str.length / 2)) a1.push(parseInt(o));
  for(let o of str.substr(str.length / 2, str.length)) a2.push(parseInt(o));
  return a1.reduce( (a, v) => a += v) == a2.reduce( (a, v) => a += v);
}

isLucky(1230)