/* function chicken() {
 return egg();
 }
 function egg() {
 return chicken();
 }
 console.log(chicken() + " came first."); */
/*  function square(x) { return x * x; }
 console.log(square(5,4, true, "hedgehog")); */
/* function multiplier(factor) {
 return number => number * factor;
 }
 let twice = multiplier(2);
 console.log(twice(5)); */

/* 
function findSolution(target) {
 function find(current, history) {
 if (current == target) {
 return history;
 } else if (current > target) {
 return null;
 } else {
 return find(current + 5, `(${history} + 5)`) ||
 find(current * 3, `(${history} * 3)`);
 }
 }
 return find(1, "1");
 }
 console.log(findSolution(21)); */

/* const strings = ['alice', 'avakayy','alice', 'avakayy'];


const capitalize = strings.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
});
 
const html = capitalize.map((str)=>{
    return(
       ` <p>${str}</p>`
    )
})


console.log(html)
 */
const iseven = (number)=>{
  while (number>0){
  function checknum(number_var){
    return number_var - 2;
    }
  if (number==1){
    return false
  } else if (number==0){
    return true
  }else {
    number = checknum(number)
  }
  } 
if (number === 0) return true; 
return false;
}

console.log(iseven(75))






