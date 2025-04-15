function leftRotate(arr) {
    let temp = arr[0]; // store the first element
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]; // shift elements to the left
    }
    arr[arr.length - 1] = temp; // move the first element to the end
    return arr;
}

console.log(leftRotate([10, 20, 30, 40]))