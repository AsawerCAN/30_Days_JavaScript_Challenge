// Activity 1: Median of Two Sorted Arrays

// Task 1:
function findMedianSortedArrays(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let low = 0,
    high = len1;
  while (low <= high) {
    const partition1 = Math.floor((low + high) / 2);
    const partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;

    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === len1 ? Infinity : nums1[partition1];

    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === len2 ? Infinity : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      high = partition1 - 1;
    } else {
      low = partition1 + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));

/* ================================ */

// Activity 2: Merge k Sorted Lists

// Task 2:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extract() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap((a, b) => a.val - b.val);

  for (let list of lists) {
    if (list) {
      minHeap.insert(list);
    }
  }

  const dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    const node = minHeap.extract();
    current.next = node;
    current = current.next;
    if (node.next) {
      minHeap.insert(node.next);
    }
  }

  return dummy.next;
}

function createLinkedList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join("->"));
}

const lists = [
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
];

const mergedList = mergeKLists(lists);
printLinkedList(mergedList);

/* ================================ */

// Activity 3: Trapping Rain Water

// Task 3:
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([2, 0, 2]));
console.log(trap([]));

/* ================================ */

// Activity 4: N-Queens

// Task 4:
function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
        continue;
      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      backtrack(row + 1);
      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return solutions;
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));

/* ================================ */

// Activity 5: Word Ladder

// Task 5:
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === endWord) return level;

    for (let i = 0; i < currentWord.length; i++) {
      for (let char of alphabet) {
        const nextWord =
          currentWord.slice(0, i) + char + currentWord.slice(i + 1);
        if (wordSet.has(nextWord)) {
          queue.push([nextWord, level + 1]);
          wordSet.delete(nextWord);
        }
      }
    }
  }

  return 0;
}

console.log(ladderLength("game", "code", ["gape", "cape", "cope", "code"]));
