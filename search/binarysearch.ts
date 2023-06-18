let _arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

// console.log("Test 1 ", binarySearchWithoutRecursion(_arr, 9))
// console.log("Test 2 ", binarySearchWithoutRecursion(_arr, 9))
// console.log("Test 3 ", binarySearchWithoutRecursion(_arr, 12))
// console.log("Test 4 ", binarySearchWithoutRecursion(_arr, 16))
// console.log("Test 5 ", binarySearchWithoutRecursion(_arr, 14))


console.log("Test #1 ", binarySearchWithRecursion(_arr, 0, _arr.length - 1, 9))
console.log("Test #2 ", binarySearchWithRecursion(_arr, 0, _arr.length - 1, 9))
console.log("Test #3 ", binarySearchWithRecursion(_arr, 0, _arr.length - 1, 12))
console.log("Test #4 ", binarySearchWithRecursion(_arr, 0, _arr.length - 1, 16))
console.log("Test #5 ", binarySearchWithRecursion(_arr, 0, _arr.length - 1, 14))

function binarySearchWithoutRecursion(arr: Array<number>, num: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (num < arr[mid]) {
      right = mid - 1;
    } else if (num > arr[mid]) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

function binarySearchWithRecursion(arr: Array<number>, left: number, right: number, num: number): boolean {
  if (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (num < arr[mid]) {
      return binarySearchWithRecursion(arr, left, mid - 1, num);
    } else if (num > arr[mid]) {
      return binarySearchWithRecursion(arr, mid + 1, right, num);
    } else {
      return true;
    }
  }
  return false;
}

