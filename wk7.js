
//Added the variables and subracted
var ages = [3,9,23,64,2,8,28,93];
var subtract = ages[ages.length -1] - ages[0];

//Displayed the new var subtract
console.log(subtract);

//Adds age 10 at end of array
ages.push(10);

console.log(ages);


//This defines var total at 0 so it can keep total count.  I then add it to for loop which will keep the total of all the ages, finally,
//I divided by the to numbers of ages in the array to get average.  
var total = 0;
for( let i = 0; i < ages.length; i++){
   
   total = total + ages[i];     
}
var average = total / (ages.length);
//This adds to the console the total and then the average
console.log(total);
console.log(average);

//new array called names 
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//I created a var totalNames and set it to 0 so it can add all the letters in each element.  Then used names.length to divide to get average
//I then printed both values by using cosole.log
var totalNames = 0;
for( let i = 0; i < names.length; i++){
  totalNames = totalNames + names[i].length;
}

var averageNumberLetters = totalNames / (names.length)
console.log(totalNames);
console.log(averageNumberLetters);




//I took this to mean taking all the strings in the array and placing them all in one string.  I started by creating a new var "newName"
//and adding the first string along with a space.  I then did the for loop and added each subsequent name with a space.  
var newNames = names[0] + " ";

for( let i = 1; i < names.length; i++){
  newNames = newNames.concat(names[i]) + " ";
  }
  console.log(newNames)

//This accesses the last element
console.log(names[names.length - 1]);

//This accesses the first element
console.log(names[0]);



//Defined the var nameLengths as an array then did a for loop to concatinate the length of each into the array
var nameLengths = [];

for( let i=0; i < names.length; i++){
  nameLengths = nameLengths.concat([names[i].length])

}
console.log(nameLengths);

// This creates the "nameLengthSum" var and gives it initial value of zero.  The loop then takes each variable in the nameLengths array and adds them. 
var nameLengthsSum = 0;
for ( let i =0; i < nameLengths.length; i++){
  nameLengthsSum = nameLengthsSum + nameLengths[i];

}
console.log(nameLengthsSum);




//I created a function with variables a, n with a being the initial input like "Hello", n being the number of times the loop will run. 
//Under console.log, I defined the output as Hello and n as 9.  The function is not specific to any variable, it can be changed on output.    

function hello(a, n){
  array = "";
  for (let i = 0; i < n; i++){
    array = array.concat(a);
  }

  return array
}
console.log(hello("Hello", 9));

//This function is similar to the previous that defines first and last name.  You then concat it with a space.  NOw when calling on function,
//just add the two strings with quotations. 

function fullName(first, last){
  value = first.concat(" " + last);

  return value
}
console.log(fullName("Wilfredo", "Torres"));


//For this, I first defined my array calling it ages and arbitrarily selected 5 variables but it does not matter how many you choose, I tested
//the function wiht 3, 5, 11, they all work.  I then created the function "greaterThan100" and had a which is the array as variable. Nex, I
//created value of 0, this will be what adds my total in the array.  once calculated in the for loop, I used a, if else function to determine
//if greater than 100 true, if less, false.  Next than console.log can be replaced with any input to give correct answer.  I also did an output
//for value to make sure it was calculating it correctly to check my code.  
var ages = [100, 0, 50, 9, 11];

function greaterThan100(a){
 value = 0;
 for( let i =0; i < a.length; i++){
  value = value + a[i];
 }


 if (value > 100){
  return true
 }
 else{
  return false
 }
 
}

console.log(greaterThan100(ages));
console.log(value);



//  Started with a var "weight" that has arbitrary weights.  Then created function call "averageWeight" with input a which is the 
//array follwedy by setting initial var value to zero which will serve as place holder for total found in the array.  next, we take the total
//and divide by number of in the array via the length command.  Finnaly we return the var average.  WE can then print and call the function 
//using the given var input i called weight.  It can be called anything though.  It can have any number of values.  
var weight = [ 230, 120, 150, 300, 100, 200];

function averageWeight(a){
  var value = 0;
  for (let i = 0; i < a.length; i++){
    value = value + a[i];
  }

  average = value / (a.length);

  return average;
}
console.log (averageWeight (weight));



//Here, I added my two arrays.  I made them have equal number of values to make the code more compact.  Since its 6 in each, I only had to do 
//1 for loop for both, making sure the second array input was used as the conditional statement in the for loop.  This allowed the total to be 
//calculated for both arrays.  In addition, I added var costValue for array 1 and "fundsValue" for array 2 to zero to add the totals.  
//Next, I checked on colose to make sure the totals were correct.  AFter this I did an if statement which obtained the average for array 1, and array 2,
//then compared them to determine if false or true.  If true, the person did not have enough money to cover cost and so recommend to keep working to earn more money.  If false, you had enough money on average
// to buy all the products.  I thought of making the arrays different lengths but this would have required an extra for loop to calculate them separetely.  

var cost = [20, 10, 90, 40, 30, 40]
var funds = [50, 30, 100, 50, 30, 50]

function affordable( a, b){
 var costValue = 0;
 var fundsValue = 0; 
 for ( let i = 0; i < b.length; i++){
  costValue = costValue + a[i];
  fundsValue = fundsValue + b[i];
 }
  console.log( costValue, fundsValue) ;
if ((costValue / a.length) > (fundsValue / b.length)){
   return true + ", Keep working"; 
} 
else {
  return false + ", Ok to spend the money";
}

}

console.log(affordable(cost, funds));


//  Here I did the function with inputs "isHotOutside" and "moneyInPocket" followed by two if statements that confirmed the boolean statement
//as true or false.  It then has another if statement to check amount of money to return true.  O/W it will return false with else statements.  
function willBuyDrink(isHotOutside, moneyInPocket){
  if( isHotOutside == true ) {
     if(moneyInPocket > 10.50){
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
console.log(willBuyDrink(true, 12));




//Here I made a simple problem to fix.  It takes in 4 inputs, lenght, width, height to calculate the volume of the container, then compares
//that volume to the volume of the fluid you are trying to add to it.  If the volume is more, it returns a statement saying it will overflow
//but if the volume is less than the container, it returns a statement saying its ok to fill with into the container.  
var length = 20;
var width = 4;
var height = 30;

var volume = 10500;


function willItOverflow(a, b, c, d){
  value = a * b * c;
  if (d > value){
    return  "It will overflow";
  }
  else{
    return "The container is big enough.  Ok to fill.";
  }

}



console.log(willItOverflow( length, width, height, volume));





