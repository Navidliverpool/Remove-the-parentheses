// Very clever solution from Codewars
function removeParentheses(s) {
  let r = 0;
  let x = "";
  for (let c of s) {
    if (c == "(") r++;
    if (r == 0) x += c;
    if (c == ")") r--;
  }
  return x;
}
console.log(removeParentheses("hello example (words(more words) here) something"))
