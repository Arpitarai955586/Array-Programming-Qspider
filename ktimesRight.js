function KtimesRight(arr,k){
    k = k % arr.length;
    if(k==0){
        return;
    }
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k ,arr.length-1)

    return arr;

    function reverse(arr,start,end){
        while(start<end){
            let temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;end--;
        }
        
       
    }
    
}
console.log(KtimesRight([10,20,30,40],5))