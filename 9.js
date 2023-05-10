// Not working code from me.
function removeParentheses(s) {
  let r = [];
  let p = 0;
  let lengthDif = 0;
  for (let i = 0; i < s.length; i++) {
  console.log("s:",s[i])
    if (s[i] == "(") {
      p = i;
  console.log("p:",p)
    }
    else if (s[i] == ")") {
      lengthDif = Math.abs(i - p);
  console.log("lengthDif:",lengthDif - 1)
      r = r.slice(p, lengthDif)
      console.log("slicedR:",r)
    }
    else {
        r.push(s[i]);
  console.log("r:",r)
    }
  }
  console.log("r:",r)
  return r
}
console.log(removeParentheses("a(b(c))"))