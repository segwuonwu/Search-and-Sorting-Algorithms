//O(n^2) worst case
//O(1) time complexity
function insertionSort(arr){
	for(let i = 0; i < arr.length; i++){
    	let val = arr[i];
      	let j = i-1;
      	while(j >= 0 && val < arr[j]){
         	arr[j+1] = arr[j];
          	j--;
        }
      	arr[j+1] = val;
    } 
  	return arr;
}

export default insertionSort;