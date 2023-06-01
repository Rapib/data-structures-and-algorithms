// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function validateBrackets (str){
  let arr = str.split('');
  let RoundOpen = 0;
  let RoundClose = 0;
  let SquareOpen = 0;
  let SquareClose = 0;
  let CurlyOpen = 0;
  let CurlyClose = 0;
  if (arr.length <2){
    return false
  } else {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === "("){
        RoundOpen++;
      }
      if (arr[i] === ")"){
        RoundClose++;
      }
      if (arr[i] === "["){
        SquareOpen++;
      }
      if (arr[i] === "]"){
        SquareClose++;
      }
      if (arr[i] === "{"){
        CurlyOpen++;
      }
      if (arr[i] === "}"){
        CurlyClose++;
      }

    }
    if (RoundOpen === RoundClose && SquareOpen===SquareClose && CurlyOpen === CurlyClose && RoundOpen + RoundClose + SquareOpen + SquareClose + CurlyOpen + CurlyClose !== 0 ){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {validateBrackets};