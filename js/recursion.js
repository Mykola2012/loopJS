"use strict";

function facktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * facktorial(n - 1);
}

//

function bracketWrapperString(n) {
  const brackets = [];

  bracketWrapper(n);

  function bracketWrapper(n) {
    if (n === 0) {
      return;
    }
    brackets.push("(");
    bracketWrapper(n - 1);
    brackets.push(")");
  }
  return brackets.join("");
}

bracketWrapperString(3);
