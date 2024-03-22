
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const  targetElement= 7;
  
function BSearch(arr,t) {
    let left =0;
    let right =arr.length-1;
while (left<=right) {
    let mid=Math.floor((left + right) / 2);

    if (arr[mid]==t) {
        return mid
    }
    else if (t>arr[mid]) {
        left=mid+1
    }
    else{
        right=mid-1

    }
}
return -1
}



console.log(BSearch(sortedArray,targetElement));