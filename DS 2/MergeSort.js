function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
let mergeSortedArray = mergeSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Merge Sort:", mergeSortedArray);


// Recursive algorithm;


// |------------------------------------------------|
// |                Merge Sort Process              |
// |------------------------------------------------|
// | Merge Sort [64, 34, -25, 12, 22, 11, 90]      |
// |                                                |
// |                      [64, 34, -25, 12]        |
// |                        /        \              |
// |           [64, 34]              [-25, 12]      |
// |             /   \                  /    \      |
// |          [64]   [34]            [-25]  [12]    |
// |                                                |
// |                      [22, 11, 90]              |
// |                        /        \              |
// |             [22, 11]             [90]          |
// |              /    \                           |
// |          [22]     [11]                        |
// |                                                |
// |         Merge Step: [22, 11, 90]               |
// |                  /            \                |
// |          [22, 11]             [90]            |
// |            /    \                            |
// |         [22]    [11]                         |
// |            \    /                            |
// |           [11, 22]                           |
// |                                                |
// |         Merge Step: [64, 34, -25, 12]         |
// |                  /                   \         |
// |         [64, 34]                 [-25, 12]    |
// |           /    \                   /    \     |
// |        [34]    [64]             [-25]  [12]   |
// |                                                |
// |         Merge Step: [64, 34, -25, 12, 22, 11, 90] |
// |                    \                /           |
// |                [-25, 12, 22, 11, 34, 64, 90]   |
// |------------------------------------------------|
