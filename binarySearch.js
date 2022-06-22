//O(log n) worst case
//O(1) time complexity
const binarySearch = (arr, goal, left, right) => {
    // first pass is arr, 4, 0, 4
    if (left > right) {
        return console.log("Number not found");
    }

    const middle = Math.floor((left + right) / 2); // 2

    if (arr[middle] === goal) {
        return middle;
    } else if (arr[middle] > goal) {
        return binarySearch(arr, goal, left, middle - 1);
    } else {
        return binarySearch(arr, goal, middle + 1, right) // arr, 4, 3, 4
    }
}


export default binarySearch;