// to find the low value in the array

function valleyElements(arr){
    let n=arr.length;
    let result=[];
    for(let i=0;i<n;i++){
       let left=i===0?-Infinity:arr[i-1];
       let right=i===n-1?Infinity:arr[i+1];
       if(arr[i]<left && arr[i]<right){
        result.push(arr[i])
       }
    }
    return result;
}
console.log(valleyElements([-1,-2,4,0,10,-31,-40,7]))