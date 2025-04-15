function leftRotate(arr,k){
     k=k%arr.length;
    if(k==0){
        return;
    }
    reverse(arr,0,arr.length-1)
    reverse(arr,0,arr.length-1-k)
    reverse(arr,arr.length-k,arr.length-1)
    return arr;

    function reverse(arr, start,end){
        while(start<end){
            let temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}
console.log(leftRotate([10,20,30,40],1))