// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]


// Answer

function flickSwitch(arr){
    let shouldReturnTrue = true;
   
     return arr.map((item) => {
       if (item === 'flick') {
         shouldReturnTrue = !shouldReturnTrue;
       }
       return shouldReturnTrue;
     });
   }