function rightRotate(arr){
    let temp=arr[arr.length-1];
    for(let i=arr.length-2;i>=0;i--){
        arr[i+1]=arr[i]
    }
    arr[0]=temp;
    return arr;
}
console.log(rightRotate([10,20,30,40]))