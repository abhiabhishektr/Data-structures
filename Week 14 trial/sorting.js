// // ============BubbleSort============

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 0; j < arr.length-i-1; j++) {
//             if (arr[j]>arr[j+1]) {
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }


// let arr=[23,54,32,66,32,3,35,75,90]
// console.log(bubbleSort(arr));



// =========================
// // Insertion Sort
// ==========================



//     function InsertionSort(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             let key = arr[i];
//             let j=i-1;
//             while (j>=0 && arr[j]>key) {
//                 arr[j+1]=arr[j];
//                 j--;
//             }
//             arr[j+1]=key;
//         }
//         return arr;
//     }
//     let arr=[4,1,4,3,224,1,432,1,4324,54,0]
//     console.log(InsertionSort(arr));


// =========================
// //Selection Sort
// ==========================

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex=i;
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j]<arr[minIndex]) {
//                 minIndex=j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[minIndex];
//         arr[minIndex]=temp;
//     }
//     return arr;
// }
// let arr=[2,32,1,2,142,3442,4324,234,0,8]
// console.log(selectionSort(arr));


// =========================
// //Quick Sort
// ==========================

// function quickSort(arr) {
//     // Base case: if the array has one or zero elements, it's already sorted
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[0];
//     let right = [];
//     let left = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > pivot) {
//             right.push(arr[i]);
//         } else {
//             left.push(arr[i]);
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let arr = [1, 2, 342, 35, 3543, 5345, 43];
// console.log(quickSort(arr));


// =========================
// //  Merge Sort
// ==========================

function mergeSort(arr) {
    if (arr.lengtj<=1) {
        return arr
    }
    let middle=Math.floor(arr.length/2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(left,right) {
    let result=[];
    let leftIndex=0;
    let rightIndex=0;

    whi
}