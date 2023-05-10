// Generate by ChatGpt and passes all testx.
function removeParentheses(s) {
  let stack = [];
  let res = "";
  console.log("res:", res);
  for (let c of s) {
    console.log("c:", c);
    if (c == "(") {
      stack.push(res);
      console.log("stack1:", stack);
      res = "";
    } else if (c == ")") {
      if (stack.length > 0) {
        res = stack.pop();
        console.log("stack2:", stack);
      } else {
        res = "";
      }
    } else {
      console.log("stack.length:", stack.length);
      if (stack.length == 0) {
        res += c;
        console.log("res:", res);
      }
    }
  }
  return res;
}

console.log(
  removeParentheses(
    "pYxrMaBCJDAGi(xD(mvF )div(C(dC bOgbXdUY)mub WUiwvfCh)VmjJ)qA(TWNcDIq(PiLv  yxtdUhcCMViscN)ETFMwget)EVvVu (c LfszGle(i(SYtlPWiP)ftIzMhuRqwgqHmoEyWRZWmD)X sg(UZhpkgKgOUM))(OsWDKJpCnxK)BfX ( ZUQBMh)HiS(bNphk X PFgNYPnh(YMYLrpaXNGF(rftlzkIyQocKGplL))(Gyduq rjOwkuSUyu(CDbOS)aQxMj(aXDsjFI)e)yQrg(BedWNcKCoJha ))CTP(ca(tKk NfhXKuXAjhfdRkhkKHZ)so dvQ(onrTkWbv(N)vRnYiKGTAnXWN)OQNDq)WubywVzf(L)nj XVhEIcdpDL(WEyGbgdupXottI)iKpvyrFIdtgVWVh"
  )
);
