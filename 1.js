function removeParentheses(s) {
  let r = "";
  let a = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
        a[0] = i
    }
    if (s[i] === ")") {
        a[1] = i
    }
  }
  for (let i = 0; i < a[0]; i++) {
r+= s[i]  
}
for (let i = a[1] + 1; i < s.length; i++) {
    r+= s[i]  
    }
  return r
}
console.log(removeParentheses("example(unwanted thing)example"))
