// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function avg_mark(numbers){
  let sum = 0;
  for (const num of numbers){
    sum+=num;
  }
  return sum/numbers.length;
}
const nums = [10, 20, 30, 40, 50];
const result = avg_mark(nums);

console.log("Average mark is", result);
