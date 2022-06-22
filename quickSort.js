function partition(arr, low, high){
 	let low_idx = low - 1;
  let	pivot = arr[high];
  	
  	for(let j = low; j < high; j++){
    	if(arr[j] <= pivot){
        	low_idx++;
          	let temp = arr[j];
          	arr[j] = arr[low_idx];
          	arr[low_idx] = temp;
        }
    }
  	let temp = arr[high];
    arr[high] = arr[low_idx + 1];
    arr[low_idx + 1] = temp;
  
  	return low_idx+1;
}

//O(n log n) worst case
//O(1) time complexity
function quickSort(arr, low, high){
	if(arr.length === 1) return arr;
  
  	if(low < high){
    	  let part_idx = partition(arr, low, high);
      
      	quickSort(arr, low, part_idx - 1);
      	quickSort(arr, part_idx + 1, high);
    }
  
  	return arr;
}

export default quickSort;