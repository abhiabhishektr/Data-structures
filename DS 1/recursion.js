// // ========== factorial ============
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Example usage:
//   console.log(factorial(5)); // Output: 120
  


//   // ========== fibonacci ============
//   function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }
  
//   // Example usage:
//   console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)
  

//     // ========== countdown ============

    // function countdown(n) {
    //     if (n <= 0) {
    //       console.log("Done!");
    //     } else {
    //       console.log(n);
    //       countdown(n - 1);
    //     }
    //   }
      
    //   // Example usage:
    //   countdown(5);
    //   // Output:
    //   // 5
    //   // 4
    //   // 3
    //   // 2
    //   // 1
    //   // Done!

      
//         // ========== sumArray ============

        // function sumArray(arr, index = 0) {
        //     if (index === arr.length) {
        //       return 0;
        //     } else {
        //       return arr[index] + sumArray(arr, index + 1);
        //     }
        //   }
          
        //   // Example usage:
        //   console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
          



//             // ========== fibonacci ============


            function power(base, exponent) {
                if (exponent === 0) {
                  return 1;
                } else {
                  return base * power(base, exponent - 1);
                }
              }
              
              // Example usage:
              console.log(power(2, 3)); // Output: 8
              