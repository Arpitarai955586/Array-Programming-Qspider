// ! given an array return a new array which contains the peak element
// let arr=[15,10,7,23,8,8,2,11,30,2]
function peakValue(arr){
    let result=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
        if((i==0 && arr[i]>arr[i+1]) || (i==n-1 && arr[i]>arr[i-1]) ||( i>0 && i<
            n-1 && arr[i]>arr[i-1] && arr[i]>arr[i+1])){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(peakValue([15,10,7,23,8,8,2,11,30,2]))