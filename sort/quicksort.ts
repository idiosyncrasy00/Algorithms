import { array } from "./utils";

function partition(arr: Array<number>, l: number, r: number): number {
  let pivot = arr[l];
  let i = l;
  let j = r;

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  //swap arr[j] and pivot
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}

function quickSortWithRecursion(arr: Array<number>, l: number, r: number) {
  if (l < r) {
    let pivot = partition(arr, l, r);
    quickSortWithRecursion(arr, l, pivot);
    quickSortWithRecursion(arr, pivot + 1, r);
  }
}

quickSortWithRecursion(array, 0, array.length)

console.log("Final array ", array);