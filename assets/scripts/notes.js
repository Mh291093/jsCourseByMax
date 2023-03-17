// Video No. = 18 "Adding JavaScript to the website"
/* Adding javascript in the head tag will be prevented
 the browser to be parsed the whole html doc.
so, added in the end of body tag after loading, parsing the html file
then js files loaded
*/

// Video No. = 19 "Introducing Variables & Constants"
/* variables, Constants are a data container or data storage
keyWords (let, var)
you can change value without using keyword let or var
ex: let userName = "Mohamed";
userName = "Ahmed";
keyWord (const)
you can't change value 
ex: const age = 29;
age = 30; this is yields an error
*/

// Video No. = 20 "Declaring & Defining Variables"
/*
Variable Names Rules 
Allowed : 
1. camelCase this is the best practice                       ex: let userName
2. snake_case this is allowed but bad practice               ex: let user_name
3. starting with $ and _                                     ex: let _user or let $name
4. letters and digits in the end or the middle of variable   ex: let userName7
notAllowed :
1. starting with letters or digits                           ex: let 1userName
2. no special characters such as (-,@,&)                     ex: let user-name
3. key words such as (let,if,for)                            ex: let let
Declaring a variable without initializing                    ex: let userName
Set a value to a variable by adding assignment operator =    ex: userName = "Mo";
*/

// Video No. = 21 "Working with Variables & Operators"
/*
opertors are a core syntax in javascript which manipulates values
ex: Addition + 
    Subtraction -
    Multiplication *
    Division /
    Modulus %    yields remainder   ex: 7%4 = 3
    Exponentiation **               ex: 2**3 = 8
*/

// Video No. = 23 "Data Types: Numbers & Strings"
/*
numbers: important for calculations                     ex: (2,58.17,-6)
strings: important for outputting and inputting results ex: ("m",'x',`y`)
*/

// Video No. = 24 "Using Constants"
/*
js code would be excuted from top to bottom 'line by line'
ex:
const x = 0;
let y = x;      copy the value which is inside constant not constant itself
y = x + 5;      change the value of variable not constant
console.log()
*/

// Video No. = 26 "Introducing Functions"
/*
Function : code on demand
Ex:
function funcName (parameters){
    body of function
}
funcName(arguments);  call function
*/

// Video No. = 31 "Scope"
/*
you can't access variable inside function in global scope even if call function
Ex:
function anything(number) {
    let word = number;
    console.log(word);
}
console.log(word);    # ReferenceError

you can access any variable inside global in function
Ex:
let age = 0;
function word() {
    console.log(age);
}
word();               # 0
*/

// Article No. = 32 "Shadowed Variables"
/* Ex:
let userName = "X";
function greeting(name) {
    let userName = name;
    console.log(userName);        # M
}
console.log(userName);            # X
greeting("M");
*/

// Video No. = 33 "Return Statement"
/*
return keyword ends the excution of the function
*/

/* Ex in excution indirect function:

function double(x){
    return x * 2;
}
function transform(num, fn){
    return fn(num);
}

let result = transform(10, double);
console.log(result);
*/

