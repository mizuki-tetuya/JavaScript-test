const array = [2, 4, 7, 5, 4, 3, 8];

const newArray = array.filter(function (item,index) {
  return array.indexOf(item) == index
})
console.log(newArray);


function leapYear(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    return "うるう年です";
  } else {
    return "うるう年違う、普通の年";
  }
}
console.log(leapYear(2020));
console.log(leapYear(2021));
