// let a=5;
// let b= a??1;
// console.log(b)

// //loops
// let num = [3,7,6,4,5]
// let x=num.map((item)=>item+1)
// console.log(x)
// console.log(num)
// console.log("//")
// num.forEach((item)=>console.log(item+2))
// // console.log(y)
// console.log(num)

// num.forEach((item,item2)=>{
    
// })
// let evencount=0;
// let oddcount=0;
// let even = num.map(item=>{
//     if(item%2==0){
//         evencount++
//         return item;
//     }else{
//         oddcount++;
//         return item;
//     }
// })
// console.log(even)
// console.log(evencount)
// console.log(oddcount)


//sets

// const mySet = new Set();

// mySet.add(1); // Set [ 1 ]
// mySet.add(5); // Set [ 1, 5 ]
// mySet.add(5); // Set [ 1, 5 ]
// mySet.add("some text"); // Set [ 1, 5, 'some text' ]
// const o = { a: 1, b: 2 };
// mySet.add(o);
// console.log(mySet)

  // ...Your code...
  function unique(arr) {
    /* your code */
    return [...new Set(arr)]
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O