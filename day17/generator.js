//generators functions 

const foo = function* () {
    yield 0;
    yield 1;
    yield 1;
  };
  
  let str =0;
  let gen = foo();
    for(let i=0;i<10;i++){
        str = gen.next().value + gen.next().value;
    console.log(str)
    }
  
  
  console.log(str);
  // Expected output: "abc"
  