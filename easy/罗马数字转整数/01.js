/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (Object.prototype.toString.call(s) !== '[object String]') {
      throw new Error('请输入字符串');
      return ;
  }
  
  let num = 0;
  let charArr = s.split('');
  let mapping = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  for (let i = 0; i < charArr.length; i++) {
    let value = 0;
    let temp = 0;
    let char = charArr[i];

    switch (char) {
        case 'I':
            if (charArr[i+1] === 'V' || charArr[i+1] === 'X') {
                value = mapping[charArr[i+1]] - 1;
                i += 1;
            } else {
              value = mapping['I']
            }
            break;
        case 'X':
            if (charArr[i+1] === 'L' || charArr[i+1] === 'C') {
                value = mapping[charArr[i+1]] - 10; 
                i += 1;
            } else {
              value = mapping['X']
            }
            break;
        case 'C':
            if (charArr[i+1] === 'D' || charArr[i+1] === 'M') {
                value = mapping[charArr[i+1]] - 100; 
                i += 1;
            } else {
              value = mapping['C']
            }
            break;
        default:
          console.log(222)
            value = mapping[char];
            break;
    }

    num += value;
  }

  return num;
};

console.log(romanToInt('LVIII'));