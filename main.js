/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = (num1,num2) => {
  if(num1 > num2){//i can also use num1-num2 but this helps me understand//
return 1;
  }else if (num1 < num2) {
    return -1;
  }
  return 0;
}

const secondNumberIsLess = (num1, num2) => {
  if(num1 > num2){
    return -1;
      }else if (num1 < num2) {
        return 1;
      }
      return 0;
}

const firstNameIsFirstAlphabetically = (name1,name2) => {
if(name1 > name2){ //huh?
return 1
} else if(name1 < name2) {
  return -1
}
return 0
}

const firstLastNameIsFirstAlphabetically = (lastName1, lastName2) => {
  if (lastName2 > lastName1){ //slice method or buildstring with loop //still dont understand slice really
return 1
  }
}

const trueIsFirst = (boolean1,boolean2) => {
  if (boolean1 > boolean2){
    return -1
      }else if (boolean1 < boolean2){
return 1
      }
  return 0
}



/************************
// ITERATION FUNCTIONS
 ************************/
const sortByNumberAscending = (numbers) => {
  return numbers.slice().sort(firstNumberIsLess)
}//slice doesnt modify original array.

const sortByNumberDescending = (numbers) => {
  return numbers.slice().sort(secondNumberIsLess)
}

const truesFirst = (array) => {
  return array.slice().sort(trueIsFirst)
}

const sortByNameAscending = (names) => {
  return names.slice().sort()
}

const sortByLastNameAscending = (lastNames) => {
  
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
