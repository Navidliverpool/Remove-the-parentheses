// Not working code from me.
function removeParentheses(s) {
  let openingBracketIndex = 0;
  let closingBracketIndex = 0;
  let res1 = "";
  let res2 = "";
  let bool1 = false;
  let bool2 = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      openingBracketIndex = i;
      bool1 = true;
    }
    if (bool1) {
      for (let i = 0; i < openingBracketIndex; i++) {
        res1 += s[i];
      }
      bool1 = false;
    }
  }
  for (let i = s.length; i < 0; i--) {
    if (s[i] == ")") {
      closingBracketIndex = i;
      bool2 = true;
    }
    if (bool2) {
      for (let i = s.length; i > closingBracketIndex; i--) {
        res2 += s[i];
      }
      let splitString = res2.split("");
      res2 = splitString.reverse();
      bool2 = false;
    }
  }

  return res1 + res2;
}
console.log(
  removeParentheses(
    "qaw (WqqqdddupXottI) nj XVhEIcdpDL (WEyGbgdupXottI) iKpvyrFIdtgVWVh"
  )
);

