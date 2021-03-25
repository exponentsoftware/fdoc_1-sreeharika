function reverseArray(arr){
   let rev = new Array;
   for(let i= arr.length-1; i>=0; i--){
       rev.push(arr[i]);
   }
   return rev;
}
console.log(reverseArray(["A", "B", "C"]));