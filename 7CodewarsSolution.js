function removeParentheses(s) {
  let lvl = 0;
  return [...s]
    .filter((c) => {
      lvl += c == "(";
      let keep = !lvl;
      lvl -= c == ")";
      return keep;
    })
    .join("");
}
