//let arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21,
  34, 55, 89, 144, 233, 377, 610, 650]

function jumpSearch(arr: Array<number>, num: number) {
  let block_size = Math.floor(Math.sqrt(arr.length));

  let i = 0;
  while (true) {
    if (i >= arr.length) i = arr.length - 1;
    if (num <= arr[i]) {
      for (let j = i; j > i - block_size; j--) {
        if (arr[j] === num) {
          console.log(`Index returned ${j}`)
          return true;
        }
      }
      break;
    }
    i += block_size
  }
  console.log("This breaks!!")
  return false;
}

console.log(`Test case with finding number 55 in array returns `, jumpSearch(arr, 650))