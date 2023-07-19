// task 1
// const arr1 = [5,8,78,54,55,68,54,45,];
// const arr2 = 54;
// const isArray=Array.isArray(arr2);
// console.log(isArray);



// task2
// const arr = [78,85,8,4,66,7];
// const arrclone = [...arr];
// console.log(arrclone);


// task3

//   const dashes = (number) => {
//     const numarray= Array.from(String(number),Number)
//     for (let i = 1; i < numarray.length; i++) {
//         const el1 = numarray[i-1];
//         const el2 = numarray[i];
//         if(el1 % 2 == 0 && el2 % 2 == 0){
//         numarray.splice(i, 0, "-")
//         }
//     }
//     return numarray.join("")
// }
    
// console.log(dashes(686458786))


// task5
// function union(arr1, arr2) {
//   const arr12 = arr1.concat(arr2);
//   const unionArray = [];
//   for (const item of arr12) {
//     if (!unionArray.includes(item)) {
//       unionArray.push(item);
//     }
//   }
//   unionArray.sort((a, b) => a - b);

//   return unionArray;
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));



// task6
// function remove_array_element(arr, elementToRemove) {
//   const filteredArray = arr.filter(function(item) {
//     return item !== elementToRemove;
//   });


//   return filteredArray;
// }

// const originalArray = [2, 5, 9, 6];
// const elementToRemove = 5;
// const resultArray = remove_array_element(originalArray, elementToRemove);

// console.log("Orijinal  " + originalArray);
// console.log("next " + resultArray);



// task7
// function removeDuplicatesFromArray(array) {
//   let uniqueSet = new Set();
//   for (let i = 0; i < array.length; i++) {
//     uniqueSet.add(array[i]);
//   }
//   let resultArray = Array.from(uniqueSet);

//   return resultArray;
// }
// let array = [1, 2, 2, 3, 4, 4, 5];
// let resultArray = removeDuplicatesFromArray(array);
// console.log(resultArray); 


// task8
// function isTargetInArray(array, target) {
//   return array.includes(target) || target === array[array.length - 1];
// }
// let inputArray = prompt("Enter the array elements separated by commas (e.g., 1, 2, 3):");
// let targetNumber = Number(prompt("Enter the target number:"));
// inputArray = inputArray.split(",").map(item => Number(item.trim()));
// let isPresent = isTargetInArray(inputArray, targetNumber);
// console.log(isPresent);


// task9
// function Elements(arr1, arr2) {
//   return arr1.filter(item => arr2.includes(item));
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];

// let commonElements = Elements(array1, array2);
// console.log(commonElements); 



