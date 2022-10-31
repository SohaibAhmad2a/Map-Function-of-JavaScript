const x = 9;
const xx=6;

function getFullName(item,y,z) {
    return [[item.firstname,item.lastname],y*2,z,x,xx*2]; //As JavaScript doesn't return multiple values, so we need to return them in an array
  }

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

//SYNTAX OF MAP FUNCTION: array.map(function(currentValue, index, arr), thisValue)

const a = persons.map(getFullName,x,xx);  /*
* You can't pass the values to the parameters of getFullName function, map function will itself pass, it will pass the current array element, current
* element index, and the array of the current element. However, you can pass x and xx yourself while writing map function. https://www.w3schools.com/jsref/jsref_map.asp
*/

console.log(a);