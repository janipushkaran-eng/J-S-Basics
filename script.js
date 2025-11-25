document.write("Hello world!")
console.log("This is a statement")
console.warn("warining")
console.error("error")
//variable declaration
/*
these
are 
comments
*/
//let const var

let name1="Jani"
console.log(name1)
let salary=3000000
console.log(salary)
console.log(typeof(salary))
salary=50000000
console.log(salary)
const pi=3.14
console.log(pi)

//pi=3.1418
//console.log(pi)
//cannot reassign a const value
//pi=3.1418
//console.log(pi)
var isValid=false
console.log(isValid)

 isValid=true
console.log(isValid)

let myAge
console.log(myAge) //undefined
console.log(100+200)
console.log(100*2)
console.log(22-10)
console.log(200/100)
console.log(10%5)
console.log(5**2)
let a=10
let b=20
let c
c=a+b
console.log(`Sum of ${a} and ${b} is ${c}`)
c=a++
console.log(c)
let d
d=++a
console.log(d)
let x=5
//x=x+5
x+=5
console.log(x)
let y=4
y+=5
console.log(y)
//logical operators
//OR ||
// AND &&
// NOT !
let flag1=true
let flag2=false
//comparison operator
console.log(flag1==flag2) //value comparison
console.log(flag1===flag2) //value and type comparison
console.log((flag1!=flag2) || (2<3))
console.log((flag1!=flag2) && (2<3))
//conditional statement
if (5>3)
{
    console.log("5 is greater than 3")
    
}
else if (5==3){
          console.log("5 is equal to 3")
    
}
else{
    console.log("5 is equal to 3")


}
//example
let time=new Date().getHours()
console.log(time)
if (time<12){
    console.log("good morning")
}
else if(time<=18)
{
    console.log("good evening")
}
else{
    console.log("good night")
}
//loops
let sum=0
for (let i=0;i<=10;i++)
{
    sum+=i
}
console.log(sum)
//example
let pdt=1
for (let i=1;i<=10;i++)
{
    pdt*=i

}
console.log(pdt)
//objects
let student = {
    name:"jani",
    age:19,
    hobby:"music"
}
console.log(student)
console.log(student.name)
console.log(student.age)

const fruits ={
    name:"apple",
    price:50,
    color:"green"

}
console.log(fruits)
console.log(fruits.name)
console.log(fruits.price)
console.log(fruits.color)
//functions
function add(){
    let a=10
    let b=20
    let c
    c=a+b
    console.log(`Sum of ${a} and ${b} is ${c}`)

}
//function call
add()

function addNumbers (num1,num2)
{
    return num1+num2
}
let result = addNumbers(45,89)
console.log(result)
console.log(addNumbers(40,44))
//arrays
let seasons=["winter","spring","summer","autum"]
console.log(seasons)
console.log(seasons[1])
console.log(seasons[0])

for(let i=0;i<seasons.length;i++)
{
    console.log(seasons[i])
}







