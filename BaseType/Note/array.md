## 核心常用代码

#### 两重 for 循环遍历

```
for (let i = 0; i < arr.length; ++i) {
  for (let j = i + 1; j < arr.length; ++j) {

  }
}
```

#### 反转链表

```
var reverseList = function(head) {
	let prev = null;
	let curr = head;

	while (curr !== null) {
		let nextTemp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextTemp;
	}

	return prev;
};
```
