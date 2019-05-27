/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  let temp = '';
  let status = true;

  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let firstStr = strs.shift();
  
  for (let c of firstStr) {
    temp = prefix;
    prefix += c;

    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(prefix)) {
        status = false;
        return temp;
      }
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["a","b"]))
