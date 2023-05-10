function removeParentheses(s){
    while (s.match(/\([\w ]+\)/g)) {
      s = s.replace(/\([\w ]+\)/g ,'');
    }
    
    return s;
    
  }