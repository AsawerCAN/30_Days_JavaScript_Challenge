// Activity 1: Add Two Numbers

// Task 1:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

/* ===================================== */

// Activity 2: Longest Substring Without Repeating Characters

// Task 2:
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let maxLength = 0;
  let start = 0;
  let charIndexMap = new Map();

  for (let end = 0; end < n; end++) {
    if (charIndexMap.has(s[end])) {
      start = Math.max(charIndexMap.get(s[end]) + 1, start);
    }
    charIndexMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcaccbcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));

/* ===================================== */

// Activity 3: Container With Most Water

// Task 3:
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));

/* ===================================== */

//Activity 4: 3Sum

// Task 4:
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 8, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([]));

/* ===================================== */

// Activity 5: Group Anagrams

// Task 5:
/**
 * Groups anagrams together from the given array of strings.
 * @param {string[]} strs - The array of strings to group.
 * @return {string[][]} - The grouped anagrams.
 */
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }

    anagramMap.get(sortedStr).push(str);
  }

  return Array.from(anagramMap.values());
}

function printGroupedAnagrams(groups) {
  groups.forEach((group) => {
    console.log(`[ ${group.join(", ")} ]`);
  });
}

const testCase1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const testCase2 = [""];
const testCase3 = ["a"];
const testCase4 = ["ab", "ba", "abc", "bca", "cab"];
const testCase5 = ["rat", "tar", "art", "star", "tars", "cheese"];

console.log("Test Case 1:");
printGroupedAnagrams(groupAnagrams(testCase1));

console.log("Test Case 2:");
printGroupedAnagrams(groupAnagrams(testCase2));

console.log("Test Case 3:");
printGroupedAnagrams(groupAnagrams(testCase3));

console.log("Test Case 5:");
printGroupedAnagrams(groupAnagrams(testCase5));
