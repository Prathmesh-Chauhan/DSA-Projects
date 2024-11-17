export function getBubbleSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    const n = auxiliaryArray.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight the bars being compared
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
  
        if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
          // Swap the elements
          animations.push([j, auxiliaryArray[j + 1]]);
          animations.push([j + 1, auxiliaryArray[j]]);
  
          // Perform the swap in the auxiliary array
          const temp = auxiliaryArray[j];
          auxiliaryArray[j] = auxiliaryArray[j + 1];
          auxiliaryArray[j + 1] = temp;
        } else {
          // No swap, revert the color
          animations.push([j, auxiliaryArray[j]]);
          animations.push([j + 1, auxiliaryArray[j + 1]]);
        }
      }
    }
  
    return animations;
  }
  
