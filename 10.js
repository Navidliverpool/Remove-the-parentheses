// Not working code from me.
function removeParentheses(s) {
  console.log("input:", s);
  let arr1 = [];
  let a = 0;
  let arr2 = [];
  let b = 0;
  // let c = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      arr1[a] = i;
      a++;
      //   console.log("p:", p);
    }
    if (s[i] == ")") {
      arr2[b] = i;
      b++;
      //   console.log("p:", p);
    }
    // if (arr1.length == arr2.length) {
    //   c = s.slice(arr1[0], arr2[arr2.length - 1]);
    //   console.log("slicedS:", s);
    // }
  }
  console.log("arr1:", arr1);
  let arr1ToS = arr1.join("");
  console.log("arr1ToS:", arr1ToS);
  console.log("arr2:", arr2);
  let g = "";
  let gg = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[arr1ToS[0]]) {
      console.log("here:", s[i], s[arr1ToS[0]]);
      break;
    }
    g += s[i];
  }
  if (arr2.length > 1) {
    gg = s.split(s[arr2[arr2.length]]).pop();
    console.log("arr.length", arr2.length);
    console.log("g and gg", g, gg);
    console.log("result:", g + gg);
  } else {
    gg = s.split(s[arr2[0]]).pop();
  }
  return g + gg;
}
console.log(removeParentheses("a(b(c))"));
