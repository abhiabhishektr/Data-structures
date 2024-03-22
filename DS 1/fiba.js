let arr = [0, 1];
//1 2 3 4 5 6 7 8

//0 1 1 2 3 5 8 13
let num = 8; // 13

for (let i = 0; i < num - 1; i++) {
    arr.push(arr[i] + arr[i + 1]);
}
console.log(arr[arr.length - 1]);

let n = 8; //13
function athul(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return athul(n - 2) + athul(n - 1);
}

// console.log(athul(n));

for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}
for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}
