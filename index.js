import selectionSort from "./selectionSort.js"
import bubbleSort from "./bubbleSort.js"
import insertionSort from "./insertionSort.js"
import quickSort from "./quickSort.js"
import binarySearch from "./binarySearch.js"

console.log("selectionSort");
console.log(selectionSort([7,4,15,2,3]));
console.log();

console.log('bubbleSort');
bubbleSort([7,4,15,2,3])
console.log();

console.log('insertionSort');
console.log(insertionSort([7,4,15,2,3]));
console.log();

console.log('quickSort');
let nums = [7,4,15,2,3];
console.log(quickSort(nums, 0, nums.length - 1));
console.log();

console.log('Binary Search');
const arr = [1, 2, 3, 4, 5];

console.log(binarySearch(arr, 4, 0, arr.length - 1));

const newArr = [ 4, 10, 25, 40, 54, 78, 82, 85, 100 ];

console.log(binarySearch(newArr, 82, 0, newArr.length - 1));

