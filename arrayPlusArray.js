// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Answer
function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((a, b) => a + b, 0);
  
    const sum2 = arr2.reduce((a, b) => a + b, 0);
  
    const totalSum = sum1 + sum2;
  
    return totalSum;
  }

