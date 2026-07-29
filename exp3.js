// filter,map,reduce
const nums=[11,12,13,45,34,56,78,90,100];
//filter
const even=nums.filter((n)=>n%2==0);  //filter method used for filtering the elements of an array based on a condition. In this case, it filters out the even numbers from the `nums` array by checking if each number `n` is divisible by 2 (i.e., `n % 2 == 0`). The result is stored in the `even` variable.
console.log("even=",even);
const sqr=even.map((i)=>(i*i)); //map
console.log("square=",sqr);
const sum=sqr.reduce((s,i)=>(s+i)); //reduce
console.log("sum=", sum);
