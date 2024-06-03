const bank="Global Ime";
// let balance=10000;
var cash=100;

let a=1;
let b=6;
let c= 12-a-b;
// console.log(c)


/// boolean
let productPrice=500;
let balance=450;


if(productPrice>balance){

    console.log("Purchase failed ! You need Rs. "+(productPrice - balance) + " more to buy this product")
}
else{
    console.log("Purchased Sucessfully Rs. "+(balance - productPrice) + "left in your wallance")

}
//array & 
let arr=[1,2,3,4,5];
for(const item of arr){
    console.log(item)
}

//obj
let obj = {
    name:"Sudip",
    age:"22"
}
for(let item in obj){
    console.log(obj[item])
}