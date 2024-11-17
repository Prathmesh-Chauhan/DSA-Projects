export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  insertionSort(auxiliaryArray, animations);
  return animations;
}

function insertionSort(array, animations) {
  // Start from the second element (index 1) because the first element is already sorted
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    let prev = i - 1;

    // Finding the correct position to insert the current element
    // Compare current element with the previous elements
    while (prev >= 0 && array[prev] > curr) {
      // Push to change color of current and previous bars (comparison)
      animations.push([i, prev]); // Compare i (current) and prev
      // Revert color of the bars after comparison
      animations.push([i, prev]);

      // Push to indicate moving the previous element up (shifting)
      animations.push([prev + 1, array[prev]]);  // Shift the previous element to the right
      array[prev + 1] = array[prev];
      prev--;
    }

    // Insert the current element at the correct position
    // Push to change color of the bar being inserted
    animations.push([i, prev + 1]); // Insert i (current) at prev + 1 position
    // Revert the color of the bar after insertion
    animations.push([i, prev + 1]);

    // Push the insertion to the correct index in the array
    animations.push([prev + 1, curr]); 
    array[prev + 1] = curr;
  }
}
