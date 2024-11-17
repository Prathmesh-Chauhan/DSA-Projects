export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  
  const pivotIdx = partition(array, startIdx, endIdx, animations);
  
  // Recursively sort elements before and after partition
  quickSortHelper(array, startIdx, pivotIdx - 1, animations);
  quickSortHelper(array, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  const pivot = array[endIdx];
  let i = startIdx - 1;

  for (let j = startIdx; j < endIdx; j++) {
    // Change color for comparison
    animations.push([j, endIdx]); // Change color for comparison
    animations.push([j, endIdx]); // Revert color after comparison

    if (array[j] <= pivot) {
      i++;
      // Swap the values and push animation for the swap
      animations.push([i, array[j]]); // Push i value
      animations.push([j, array[i]]); // Push j value
      swap(array, i, j);
    }
  }

  // Swap the pivot element to its correct place
  animations.push([i + 1, array[endIdx]]); // Push pivot to correct position
  animations.push([endIdx, array[i + 1]]); // Push end element to pivot position
  swap(array, i + 1, endIdx);

  return i + 1;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
