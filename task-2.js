function processNumber(num){
  if(num % 2===0){
    return num / 2;
  } else {
    return num * 2;
  }
}


console.log(processNumber(6))
console.log(processNumber(7))