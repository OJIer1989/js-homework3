const arrRandomNumbers = [3,5,4,6,9,8,20,31];
arrRandomNumbers.unshift(1);
 arrRandomNumbers.push(33);
 arrRandomNumbers.push(10);


 let EvenNumber = [];
function NumbersEven() {
   for (let a = 0; a < arrRandomNumbers.length; a++) {
     if ((arrRandomNumbers[a] % 2) == 0) {
      EvenNumber.push(arrRandomNumbers[a]);
     }
   }
  }
 NumbersEven(EvenNumber);
 alert(EvenNumber);

//  -----------------------------------------------
  
 let NumbersOdd = [];
  function OddNumbers(b) {
    for(b = 0; b<arrRandomNumbers.length; b++){
       if((arrRandomNumbers[b] % 2) == 1){
       NumbersOdd.push(arrRandomNumbers[b]);
      }
    }
    return
  }
OddNumbers(NumbersOdd);
alert(NumbersOdd);

// ------------------------------------------------

let NumberEven = [];
function EvenNumbers() {
  for (let a = 0; a < arrRandomNumbers.length; a++) {
  NumberEven.push(arrRandomNumbers[a]*2 )
  }
  return
}
EvenNumbers(NumberEven);
alert(NumberEven);


// ------------------------------------------------------------

const boolArr = ['aaa', true, 'ccc', false, 'false'];
let boolSort = [];

function sortArr(a) {
  for(a = 0; a<boolArr.length; a++ ){
 if(boolArr[a] != true  && boolArr[a] != false)
   boolSort.push(boolArr[a]);
  }
  return
}
sortArr(boolSort);
alert(boolSort);
console.log(boolSort);

// // ------------------------------------------------

const smile = [' :) ' , ' =) ' , ' :) ', ' =) ' , ' :) ' , ' =) '];
let NewSmile = [];

function Smile() {
  for(let a = 0; a<smile.length; a++){
    if(smile[a] == ' =) '){
      NewSmile.push(' ;) ')
    }
    else{
      NewSmile.push(smile[a])
    }
  }
  return
}
Smile(NewSmile);
alert(NewSmile);
console.log(NewSmile);

// ------------------------------------------------------

const Animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let AnimalsPrompt = prompt('Выберите first или last' , 'first')
let NewAnimals = [];

function Animal(){
    if (AnimalsPrompt == 'first' ){
    NewAnimals.unshift(Animals.shift());
    }
    else if (AnimalsPrompt == 'last') {
     NewAnimals.push(Animals.pop())
    }
    else{
      alert('oops')
    }
    return
}
Animal(NewAnimals);
alert(NewAnimals);
console.log(Animals);













