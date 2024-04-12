function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
}
 
// Example usage:
let quickSortedArray = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Quick Sort:", quickSortedArray);



// Recurisve Sorting  algorithm
// 1 pivot element  (traverse and make the smallers into the left and the larger into the right)


// |------------------------------------------------|
// |               Quick Sort Process               |
// |------------------------------------------------|
// | Quick Sort [64, 34, 25, 12, 22, 11, 90]       |
// |                                                |
// |         Pivot: |64|                           |
// |      [34, 25, 12, 22, 11]           [90]      |
// |           ^                          ^         |
// |           |                          |         |
// |           |                          |         |
// |           |                          |         |
// |           |                          |         |
// |------------------------------------------------|
// | Quick Sort [34, 25, 12, 22, 11] |64| [90]    |
// |                     ^                        |
// |                     |                        |
// |                     |                        |
// |                     |                        |
// |                     |                        |
// |------------------------------------------------|
// | Quick Sort [25, 12, 22, 11] |34| [64, 90]    |
// |           ^                        ^           |
// |           |                        |           |
// |           |                        |           |
// |           |                        |           |
// |           |                        |           |
// |------------------------------------------------|
// | Quick Sort [12, 11] |22| [25]    |34| [64, 90]|
// |           ^       ^             ^             |
// |           |       |             |             |
// |           |       |             |             |
// |           |       |             |             |
// |           |       |             |             |
// |------------------------------------------------|
// | Quick Sort [11] |12| [22]    |25| [34]  |64| 90|
// |           ^   ^               ^            ^   |
// |           |   |               |            |   |
// |           |   |               |            |   |
// |           |   |               |            |   |
// |           |   |               |            |   |
// |------------------------------------------------|
// | Quick Sort [11, 12, 22, 25, 34, 64, 90]        |
// |           ^                                  ^
// |           |                                  |
// |           |                                  |
// |           |                                  |
// |           |                                  |
// |------------------------------------------------|
