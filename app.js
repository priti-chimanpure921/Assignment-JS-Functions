//Function Expression

let sum = function(a,b){
    return a+b;
};

console.log(sum); // sum is a global varial which store the function definition as it's value
console.log(sum(2,3));// use variable name to call the function

sum = function(a,b,c)
{
    return a+b+c ;
};

console.log(sum);// we change the value of variable 
console.log(sum(2,3,2));

//Higher Order Functions : function that takes one or multiple functions as an argument
let greet = function(){
    console.log("Hello");
};

let indainGreet = function(){
    console.log("Namaste");
};

let allGreet = function(func1,func2){
    func1();
    func2();
}

let multiple_greet = function(func,num){
    for(let i = 0 ;i<num;i++)
    {
        func();
    }
};

multiple_greet(greet,5);
allGreet(greet,indainGreet);

//Higher order function : function that returns another functions . They are also called as factory functions
let evenOddCheck = function(request)
{
    if(request == "odd")
    {
        let odd = function(n){
                console.log(!(n%2 == 0));
        };
        return odd;       
    }
    else if(request == "even")
    {
        let even = function(n){
            console.log(n%2 == 0);  
        }
        return even;      
    }else
    {
        console.log("Incorrect request...");
    }
};
let request = "even";
let func = evenOddCheck(request);
func(4);

//Method : function defined inside an object
const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};

let res = calculator.add(2,3);
console.log(res);

//Write a JS function that returns array elements larger than a number.
let arrayNumber = [12,32,45,34,83,56,93,89,94,92,83,85,50,51];
let newArray = [];
let num = 50;
function largerNumbers()
{
    for(ele of arrayNumber)
    {
        if(ele>num)
        {
            newArray.push(ele);
        }
    }
    return newArray;
}
console.log(largerNumbers());

//Write a JavaScript function to extract unique characters from a string.
//example str=“abcdabcdefgggh” ans=“abcdefgh”
let str = "abcdabcdefggghiooi";

function uniqueChars(str)
{
    let ans = [];
    let strArray = Array.from(str);
    console.log(strArray);
    for(ele of strArray)
    {
        if(!(ans.includes(ele)))
        {
            ans.push(ele);
        }
    }
    return ans;
}

let newAns = uniqueChars(str);
console.log(newAns.toString());

//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Example:country=["Australia","Germany","UnitedStatesofAmerica"]
//output:"UnitedStatesofAmerica"
let countries = ["Australia","Germany","United States of America","Singapore"];

function longestCountryName(countries)
{
    let country = "";
    for(let i=0;i<countries.length;i++)
    {
        if(countries[i].length > country.length )
        {
            country = countries[i];
        }
    }
    return country;
}
console.log(longestCountryName(countries));

//Write a JavaScript function to count the number of vowels in a String argument.
function countVowels(str)
{
    let count = 0 ;
    for(ele of str)
    {
        if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')
        {
            count++;
        }
    }
    return count;
}
let vowels = countVowels(str);
console.log(`The number of vowels in a string are ${vowels}.`);

//Write a JavaScript function to generate a random  number within a range (start,end).
let end = 30;
let start = 20 ;
let random = start + (Math.floor ( Math.random() * (end - start) ) + 1)   ;
console.log(random);