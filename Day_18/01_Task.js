function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);