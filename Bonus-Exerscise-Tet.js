//Toan tu boa ngoi
const x=100;
let result;
if(x<1000){
    result="nho hon 1000";
}else{
    result="lon hon hoac bang 1000";
}console.log(result);

//rut gon 
const x2= 1000;
const result2 =(x2<1000)? "nho hon 1000": "lon hon hoac bang 1000";
console.log(result2)

//Shorthand Evaluated
let variable2;
if(variablle1 !==null || variable1 !== undefined ||variable1 !== ''){
    variable2 =variable1;
}else {
    variabl2="";
}
//rut gon
const variable2=variable1 || "";

//Variable declaration-If Comparison
let x;
let y;
let z=3;
//rut gon
let x,y,z=3;
//
if(isTurnOn === true)
//rut gon.
if(isTurnOn)

//For looplo
for(let i =0; i<sampleArr.legth; i++)
//rut gon
for(let item in sampleArr)
//For loop with decimal base
for(let i=0; i<100000; i++){}
for(let i=0; i<1e5; i++){}

// Object property
const x3=1, y3=2;
// const obj= {x3: x3, y3: y3};
const obj= {x3, y3};
console.log(obj);

//Function
function sayHello(name) {
    console.log('Hello', name);
}

setTimeout(function() {
    console.log('Loaded')
}, 2000);

FileList.forEach(function() {
    console.log(item);
});

sayHello = name => console.log('Hello,name');

setTimeout(() => console.log('Loaded'), 2000);

FileList.forEach(item => console.log(item));

function getValue(ratio) {
    return ratio * 6.9;
}

getValue = ratio => ratio * 6.9

//set default value
function getValue(a, b, c) {
    if (a === undefined)
      a = 3;
    if (b === undefined)
      b = 4;
    return a * b + c;
}

getValue = (a, b = 3, c = 4) => (a * b + c);

//Template list 

const welcome = 'You have logged in as ' + first + ' ' + last + ''
 
const welcome = 'You have logged in as ${first} ${last} .';

const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
    + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
    + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
    + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
    + 'irure dolor in reperhenderit in voluptate velit esse.\n\t'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'

//Destructuring Assignment

const action = require('lib/action')
const service = require('lib/service')

const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controller = this.props.controller;
const component = this.props.component;

import { action, service } from 'lib';
 
const { form, errors, entity, controller, component } = this.props;

//Spead Operator

//joining arrays
const odd = [1, 3, 5,];
const nums = [2 ,4 ,6].concat(odd);

// cloning arrays 
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()

//joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6,...odd];

//cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];

const odd = [1, 3, 5];
const nums = [2,...odd, 4 , 6];

//Constraint Param
function sample(paraml) {
    if (paraml === undefined) {
        throw new Error('Thiếu tham số!');
    }
    return paraml;
}

mandatory = () => { throw new Error('Thiếu tham số!'); }

sample = (paraml = mandatory()) => paraml

//Find() in arrays
const employees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 },
]

function findEmp(name) {
    for(let i = 0; i<employees.length; ++i) {
        if(employees[i].name === name) {
            return employees[i];
        }
    }
}

const name = 'Emp A'
emp = findEmp(name)

const name = 'Emp A'
emp = employees.find(item => item.name === name)

//Object[key]

function validate(fullName) {
    if(!fullName.firstName)
      return false;
    if(!fullName.lastName)
      return false;
    return true;
}

console.log(validate({firstName:'Duy',lastName;'Buffet'}));//true

const rule = {
    firstName: {
        required:true
    }
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Duy'})); //false
console.log(validate(rule, {firstName:'Duy',lastName:'Buffet'})); //true

//Bitwise Not double 

Math.floor(6.9) === 6 //true 

~~6.9 === 6 //true