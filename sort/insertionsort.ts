import { array } from "./utils";

let pass = 0;
while (true) {
  let isSwap = false;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j >= 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]]
      j--;
      isSwap = true;
      pass++;
      console.log("The pass is ", pass);
      console.log("Array changed: ", array)
    }
  }
  if (isSwap === false) {
    break;
  }
}

console.log("Final array ", array);