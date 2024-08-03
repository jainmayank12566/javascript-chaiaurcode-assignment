//task4
// function sayhello(arr,target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(sayhello([1,2,100,200,0],100))
// console.log(sayhello([1,2,100,200,0],6))

// using recursion
// function sayhello(arr,target){
//     if(arr.length===0){
//         return -1;
//     }
//     if(arr[arr.length-1]===target){
//         return arr.length-1;
//     }
//     return sayhello(arr.slice(0,arr.length-1),target)
// }
// console.log(sayhello([1,2,100,200,0],100))

// function sayhello(arr,index,target){
//     if(index>=arr.length){
//         return -1;
//     }
//     if(arr[index]===target){
//         return index;
//     }
//     return sayhello(arr,index+1,target)
// }
// console.log(sayhello([1,2,100,200,0],0,100))

//task5
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
// console.log(sayhello([1,2,3,4,5],2))
// console.log(sayhello([1,2,3,4,5],100))

// using recursion
// function sayhello(arr,target,i=0,j=arr.length-1){
//     if(i>j){
//         return -1;
//     }
//     let mid=Math.floor((i+j)/2)
//     if(arr[mid]===target){
//         return mid;
//     }
//     if(arr[mid]<target){
//         return sayhello(arr,target,mid+1,j)
//     }
//     return sayhello(arr,target,i,mid-1)
// }
// console.log(sayhello([1,2,3,4,5],2))