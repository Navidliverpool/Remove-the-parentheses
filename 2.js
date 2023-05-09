// This code is written by me. It passes the Basic Tests, but not the Random Tests. 
function removeParentheses(s) {
//   console.log("Input:", s);
  let r = "";
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      a[0] = i;
      break;
    }
  }
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === ")") {
      a[1] = i;
      break;
    }
  }
  console.log("a:", a);
  for (let i = 0; i < a[0]; i++) {
    r += s[i];
  }
  for (let i = a[1] + 1; i < s.length; i++) {
    r += s[i];
  }
  console.log("r:", r.length);
  if (r === "") {
    r = "  ";
  }
  return r;
}
console.log(
  removeParentheses(
    "pYxrMaBCJDAGi(xD(mvF )div(C(dC bOgbXdUY)mub WUiwvfCh)VmjJ)qA(TWNcDIq(PiLv  yxtdUhcCMViscN)ETFMwget)EVvVu (c LfszGle(i(SYtlPWiP)ftIzMhuRqwgqHmoEyWRZWmD)X sg(UZhpkgKgOUM))(OsWDKJpCnxK)BfX ( ZUQBMh)HiS(bNphk X PFgNYPnh(YMYLrpaXNGF(rftlzkIyQocKGplL))(Gyduq rjOwkuSUyu(CDbOS)aQxMj(aXDsjFI)e)yQrg(BedWNcKCoJha ))CTP(ca(tKk NfhXKuXAjhfdRkhkKHZ)so dvQ(onrTkWbv(N)vRnYiKGTAnXWN)OQNDq)WubywVzf(L)nj XVhEIcdpDL(WEyGbgdupXottI)iKpvyrFIdtgVWVh"
  )
);
