// //generators functions 

// const foo = function* () {
//     yield 0;
//     yield 1;
//     yield 1;
//   };
  
//   let str =0;
//   let gen = foo();
//     for(let i=0;i<10;i++){
//         str = gen.next().value + gen.next().value;
//     console.log(str)
//     }
  
  
//   console.log(str);
//   // Expected output: "abc"
  


//curring
// function add(){
//     let a=1;
//     console.log(a);
//     // function multiply(){
//     //     console.log(a)
//     // }
//     return a;
// }
// add()
// let multiplyref=add();

// console.log(multiplyref)

let a=[1,2,3];
let sets =new Set(a);
console.log(sets)
let uniqueArr = Array.from(sets)
console.log(uniqueArr)