/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路：
 * 将两个链表变成两个数组，合并，然后数组排序，再生成一个链表
 */
var mergeTwoLists = function(l1, l2) {
  let l1Arr = [];
  let l2Arr = [];
  let arr = [];
  let newL = null;

  if (l1 === null) l1Arr = [];
  if (l2 === null) l2Arr = [];

  while(l1) {
    l1Arr.push(l1.val);
    l1 = l1.next;
  }

  while(l2) {
    l2Arr.push(l2.val);
    l2 = l2.next;
  }

  arr = l1Arr.concat(l2Arr).sort((a, b) => a-b);

  let item = arr.shift();
  if (item !== undefined) {
    newL = {};
    newL.val = item;
    let temp = newL; 

    while(arr.length > 0) {
      temp.next = {
        val: arr.shift(),
        next: null
      };
      temp = temp.next;
    }
  }

  return newL;
};

var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

mergeTwoLists(null, {val: 0, next: null});