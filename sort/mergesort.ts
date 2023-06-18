import { array } from "./utils";

//iterative (no recursion) https://www.interviewkickstart.com/learn/iterative-merge-sort

function merge(arr: Array<number>, l: number, m: number, r: number) {
  let n1 = m - l + 1; //number of elements between [l, m]
  let n2 = r - m; //number of elements between (m, r]

  let L = new Array<number>(n1); //create an array containing elements between [l, m]
  let R = new Array<number>(n2); //create an array containing elements between (m, r]

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i]; //copy element into L array
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j]; //copy element into R array
  }

  let k = l;
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSortWithoutRecursion(arr: Array<number>) {
  let N = arr.length;
  for (let sub_size = 1; sub_size < N; sub_size *= 2) {
    for (let L = 0; L < N; L += (2 * sub_size)) {
      let Mid = Math.min(L + sub_size - 1, N - 1);
      let R = Math.min(L + 2 * sub_size - 1, N - 1);
      // function to merge  two sub-arrays of
      // size sub_size starting from L and Mid
      merge(arr, L, Mid, R);
    }
  }
}


//recursion https://www.geeksforgeeks.org/merge-sort/
function mergeSortWithRecursion(arr: Array<number>, l: number, r: number) {
  if (l >= r) return;
  let m = l + Math.floor((r - l) / 2);

  mergeSortWithRecursion(arr, l, m);
  mergeSortWithRecursion(arr, m + 1, r);
  merge(arr, l, m, r);
}


//mergeSortWithoutRecursion(array);

mergeSortWithRecursion(array, 0, array.length - 1);
//mergeSortWithoutRecursion(array)
console.log("Final array ", array);