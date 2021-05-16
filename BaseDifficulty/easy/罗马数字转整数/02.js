/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (Object.prototype.toString.call(s) !== '[object String]') {
    throw new Error('请输入字符串');
    return;
  }

  let result = 0;

  for (let c of s) {
    switch (c) {
      case 'I':
        result += 1;
        break;
      case 'V':
        result += 5;
        break;
      case 'X':
        result += 10;
        break;
      case 'L':
        result += 50;
        break;
      case 'C':
        result += 100;
        break;
      case 'D':
        result += 500;
        break;
      case 'M':
        result += 1000;
        break;
    }
  }

  if (s.includes('IV') || s.includes('IX')) result -= 2;
  if (s.includes('XL') || s.includes('XC')) result -= 20;
  if (s.includes('CD') || s.includes('CM')) result -= 200;

  return result;
};

console.log(romanToInt('LVIII'));