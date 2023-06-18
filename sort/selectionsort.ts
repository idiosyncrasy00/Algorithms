import { array } from "./utils";

let pass = 0;
for (let i = 0; i < array.length - 1; i++) {
  pass++;
  console.log("The pass is ", pass);
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
      console.log("Array changed: ", array)
    }
  }
}

console.log("Final array ", array);