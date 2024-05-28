// //closures in javascript

// // const a=()=>{
// //     let d=1;
// //     const b=()=>{
// //         // let d=6;
// //         console.log(3+d);
// //      }
// //      d=2;
// //      b();
// // }

// const e=()=>{
//     let f=2;
//     const g=()=>{
//         console.log(f)
//     }
//     g()
// }
// e();


// // a();


//stack overflow due to recursion 

// function recursion(){ 
//     console.log("a")
//     recursion(); //a function calling itself 
// }
// recursion();

//side bar using recursion

// const name = [
//     {
//         shift: "day",
//         child: [
//             {
//                 shift: "afternoon",
//                 child: [{
//                     shift: "afternoon",
//                     child: null,
//                 }],
//             }
//         ]
//     }
// ];

// const recursion = (menu) => {
    
//     if (Array.isArray(menu)) {
//         console.log(menu[0].child)
//         menu.forEach(item => recursion(item));
//     }  else {
//         console.log("can't go further");
//     }
// };

// recursion(name);


// const arr=[1,2,3,[4,5,6,[7,8,9]]];

// let finalArr=[]
// const recursion = (arra)=>{
//     arra.forEach(element => {
//         if(Array.isArray(element)){
//             recursion(element)
//         }else{
//             finalArr.push(element)
//         }
        
//     });
// }

// recursion(arr);
// console.log(finalArr)

//fibonnaci series 
let n=10;
let arr=[0,1];
let nextTerm;
const fibonnac=(n)=>{
    if (n < arr.length) {
        // If the value is already computed, return it from the array
        return arr[n];
    } 
    else{
       nextTerm = fibonnac(n-1)+fibonnac(n-2);
       arr.push(nextTerm);
       return nextTerm;
    }
}
fibonnac(n)
console.log(nextTerm)
console.log(arr);
