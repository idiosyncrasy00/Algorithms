import { array } from "./utils";

let pass = 0;
while (true) {
  let isSwap = false;
  pass++;
  console.log("The pass is ", pass);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
      isSwap = true;
      console.log("Array changed: ", array)
    }
  }
  if (isSwap === false) {
    break;
  }
}

console.log("Final array ", array);