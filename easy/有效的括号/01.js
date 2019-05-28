/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;
  if (s.indexOf('(') === -1 && s.indexOf('{') === -1 && s.indexOf('[') === -1) return false;
  if (s.indexOf(')') === -1 && s.indexOf('}') === -1 && s.indexOf(']') === -1) return false;

  let stack = [];
  let sArr = s.split('');

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '(' || sArr[i] === '{' || sArr[i] === '[') {
      stack.push(sArr[i]);
    } else {

      if (sArr[i] === ')') {
        if (stack[stack.length-1] === '(') {
          stack.pop();
        } else {
          return false;
        }
      } else if (sArr[i] === '}') {
        if (stack[stack.length-1] === '{') {
          stack.pop();
        } else {
          return false;
        }
      } else if (sArr[i] === ']') {
        if (stack[stack.length-1] === '[') {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(()("));