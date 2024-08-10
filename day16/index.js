//task1
// function sayhello(n){
//     let sum=1;
//     for(let i=1; i<=n; i++){
//         sum=sum*i;
//     }
//     return sum;
// }
// console.log(sayhello(5))
// console.log(sayhello(0))

// using recursion
// function sayhello(n){
//     if(n<=1){
//         return 1;
//     }
//     return n*sayhello(n-1);
// }
// console.log(sayhello(5))
// console.log(sayhello(0))

//task2
// function sayhello(n){
//     let a=0;
//     let b=1;
//     let c;
//     for(let i=0; i<n; i++){
//         c=a+b;
//         [a,b]=[b,c];//or a=b; b=c;
//     }
//     return a;
// }
// console.log(sayhello(0))
// console.log(sayhello(1))

// using recursion
// function sayhello(n){
//     if(n<=1){
//         return n;
//     }
//     return sayhello(n-1)+sayhello(n-2);
// }
// console.log(sayhello(3))
// console.log(sayhello(0))
// console.log(sayhello(1))

//task3
// function sayhello(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(sayhello([1,2,3,4,5]))
// console.log(sayhello([]))

// using recursion
// function sayhello(arr){
//     if(arr.length===0){
//         return 0;
//     }
//     return arr[arr.length-1]+sayhello(arr.slice(0,arr.length-1))
// }
// console.log(sayhello([1,2,3,4,5]))
// console.log(sayhello([]))
// console.log(sayhello([1]))

// function sayhello(arr,index=0){
//     if(index>=arr.length){
//         return 0;
//     }
//     return arr[index]+sayhello(arr,index+1);
// }
// console.log(sayhello([1,2,3,4,5]))
// console.log(sayhello([]));

//task4
// function sayhello(arr){
//     let max=-Infinity
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(sayhello([1,2,3,5,0,-1]))
// console.log(sayhello([-3,-4,0,-6]))

// using recursion
// function sayhello(arr,max){
//     if(arr.length===0){
//         return max;
//     }
//     if(arr[arr.length-1]>max){
//         max=arr[arr.length-1];
//     }
//     return sayhello(arr.slice(0,arr.length-1),max)
// }
// console.log(sayhello([1,2,3,4,100,0],-Infinity))

// function sayhello(arr,index=0,max=-Infinity){
//     if(index>=arr.length){
//         return max;
//     }
//     if(arr[index]>max){
//         max=arr[index];
//     }
//     return sayhello(arr,index+1,max);
// }
// console.log(sayhello([1,0,-100]))

//task5
// function sayhello(str){
//     if(str.length<=1){
//         return str;
//     }
//     let newstr=str.split("").reverse().join("")
//     return newstr;
// }
// console.log(sayhello("hello"))
// console.log(sayhello(""))

// using recursion
// function sayhello(str){
//     if(str.length<=1){
//         return str;
//     }
//     return str[str.length-1]+sayhello(str.substring(0,str.length-1))
// }
// console.log(sayhello("hello"))
// console.log(sayhello(""))
// console.log(sayhello("s"))

//task6
// function sayhello(str){
//     let i=0;
//     let j=str.length-1;
//     while(i<j){
//         if(str.charAt(i)!==str.charAt(j)){
//             return false;
//         }
//         else{
//             i++;
//             j--;
//         }
//     }
//     return true;
// }
// console.log(sayhello("racecar"))
// console.log(sayhello("hello"))
// console.log(sayhello("s"))
// console.log(sayhello(""))

// using recursion
// function sayhello(str){
//     if(str.length<=1){
//         return true;
//     }
//     let i=0;
//     let j=str.length-1;
//     if(str[i]!==str[j]){
//         return false;
//     }
//     return sayhello(str.slice(i+1,str.length-1))
// }
// console.log(sayhello("hello"))
// console.log(sayhello("racecar"))
// console.log(sayhello(""))
// console.log(sayhello("s"))

// function sayhello(str,i=0,j=str.length-1){
//     if(i>=j){
//         return true;
//     }
//     if(str[i]!==str[j]){
//         return false;
//     }
//     return sayhello(str,i+1,j-1);
// }
// console.log(sayhello("racecar"))

//task7
// function sayhello(arr,target){
//     let i=0;
//     let j=arr.length-1;
//     while(i<=j){    
//         let mid=Math.floor((i+j)/2)
//         if(arr[mid]===target){
//             return mid;
//         }
//         else if(arr[mid]<target){
//             i=mid+1;
//         }
//         else{
//             j=mid-1;
//         }
//     }
//     return -1;
// }
// console.log(sayhello([1,2,3,4,5],4))
// console.log(sayhello([1,2,3,4,5],2))

// using recursion-binary search
// function sayhello(arr,target,i=0,j=arr.length-1){
//     if(i>j){
//         return -1;
//     }
//     let mid=Math.floor((i+j)/2)
//     if(arr[mid]===target){
//         return mid;
//     }
//     if(arr[mid]<target){
//         return sayhello(arr,target,mid+1,j);
//     }
//     return sayhello(arr,target,i,mid-1);
// }
// console.log(sayhello([1,2,3,4,5],4))
// console.log(sayhello([1],4))
// console.log(sayhello([0],2))

//task8
// function sayhello(arr,target){
//     let count=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(sayhello([1,2,0,9,1,2,1,3],2))

// using recursion
// function sayhello(arr,target){
//     if(arr.length===0){
//         return 0;
//     }
//     let count=0;
//     if(arr[arr.length-1]===target){
//         count++;
//     }
//     return count+sayhello(arr.slice(0,arr.length-1),target)
// }
// console.log(sayhello([1,2,0,9,1,2,1,3],2))
// console.log(sayhello([],100))

// function sayhello(arr,target,count=0,index=0){
//     if(index>=arr.length){
//         return count;
//     }
//     if(arr[index]===target){
//         count++;
//     }
//     return sayhello(arr,target,count,index+1);
// }
// console.log(sayhello([1,2,3,1,4,3,1,5,0,1,0],1))