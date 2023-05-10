function removeParentheses(s){
    let startIndex;
    let endIndex;
    let str = s;
    
    while (str.includes('(') || str.includes(')')){
      startIndex = str.lastIndexOf('(');
      endIndex = str.indexOf(')', startIndex);
      str = str.slice(0, startIndex) + str.slice(endIndex + 1);
    }
    
    return str;
  }