function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;  
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Example usage:
let selectionSortedArray = selectionSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Selection Sort:", selectionSortedArray);
// Checking the current minimum with the aitration and then swap between between the begining 

// Here's a brief summary of how the selection sort algorithm works:

// - **Step 1:** Start with the first element of the array as the minimum.
// - **Step 2:** Compare the minimum with each subsequent element in the array.
// - **Step 3:** If a smaller element is found, update the minimum.
// - **Step 4:** Swap the minimum element with the first element after each pass.
// - **Step 5:** Repeat steps 1-4 for each subsequent element until the array is sorted.

// |---------------------------------|
// |     1st Pass (i=1)              |
// |---------------------------------|
// | [64, | 34, -25, 12, 22, 11, 90] |

// |        ^                        |
// |        |                        |
// |        |                        |
// |---------------------------------|
// |     2nd Pass (i=2)              |
// |---------------------------------|
// | [34, 64, | -25, 12, 22, 11, 90] |
// |            ^                    |
// |            |                    |
// |            |                    |
// |---------------------------------|
// |     3rd Pass (i=3)              |
// |---------------------------------|
// | [-25, 34, 64, | 12, 22, 11, 90] |
// |                ^                |
// |                |                |
// |                |                |
// |---------------------------------|
// |     4th Pass (i=4)              |
// |---------------------------------|
// | [-25, 12, 34, 64, | 22, 11, 90] |
// |                    ^            |
// |                    |            |
// |                    |            |
// |---------------------------------|
// |     5th Pass (i=5)              |
// |---------------------------------|
// | [-25, 12, 11, 34, 22, | 64, 90] |
// |                        ^        |
// |                        |        |
// |                        |        |
// |---------------------------------|
// |     6th Pass (i=6)              |
// |---------------------------------|
// | [-25, 12, 11, 22, 34, 64, | 90] |
// |                            ^    |
// |                            |    |
// |                            |    |
// |---------------------------------|
// |     7th Pass (i=7)              |
// |---------------------------------|
// | [-25, 12, 11, 22, 34, 64, 90]  |
// |                                |
// |                                |
// |                                |
// |---------------------------------|
