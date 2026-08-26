console.log("Printing method");

//variables
{
    age = 24;
    console.log(age);
}

let name = "let vari.";
const namee = "const vari.";
var nameee = "var vari.";
console.log(name)
console.log(namee)
console.log(nameee)

//data types

//strings
{
    vari = "strings"
    console.log(vari)
    typeof vari
}
//number 
{
    vari = 34
    console.log(vari)
    typeof vari
}
//boolen
{
    vari = 3 > 5
    console.log(vari)
    typeof vari
}
//bigInt
{
    vari = 345
    console.log(vari)
    typeof vari
}
//object
{
   const student = {
        name: "raghav",
        class: 4,
        isPass: "yes"
    }
    console.log(student)
}

//coments \

/* multiple line 
comments*/

//operatars

//addition
{
    vari = 3 + 4
    console.log(vari)
}
//subtraction
{
    vari = 3 - 4
    console.log(vari)
}
//multiplication
{
    vari = 3 * 4
    console.log(vari)
}
//divide
{
    vari = 4 / 2 
    console.log(vari)
}
//remainder of divide 
{
    vari = 9 % 2
    console.log(vari)
}
//power 
{
    vari = 5 ** 3
    console.log(vari)
}
//increment
{
    vari = 5
    let vari2 = vari++
    console.log(vari)
}
//decrement
{
    vari = 5
    vari3 = vari++
    console.log(vari)
}
// +=
{
    vari = 4 
    console.log(vari += 3)
}
// -=
{
    vari = 4
    console.log(vari -= 2)
}
// *=
{
     vari = 4
    console.log(vari *= 2)
}
// /=
{
     vari = 4
    console.log(vari /= 2)
}
// %=
{
     vari = 4
    console.log(vari %= 2)
}
// **=
{
     vari = 4
    console.log(vari **= 2)
}
// ==
{
    console.log(3 == 4)
}
// != 
{
    console.log(3 != 2)
}
// ===
{
     console.log(3 === "3")
}
// !==
{
     console.log(3 !== "2")
}
// <
{
     console.log(vari != 2)
}
// >
{
    console.log(vari != 2)
}
// logical op.

//&&
{
    vari = 3 > 7
    vari3 = 5 > 1 
    console.log(vari && vari3)
}
//condition is JS 

//IF
{
    vari = 34
    if (vari > 18){
      console.log("you can vote");
    }
}
// if-else
{
    vari = 16
    if (vari > 18){
        console.log("you can vote")
    } else{
        console.log("you cannot vote")
    } 
}
//lese-if
{
    mode = "white"
    if (mode = black){
        console.log("black")
    } else if (mode = "white"){
        console.log("white")
    } else{
        console.log("blue")
    }
}
//loops

//for loop
{
    for ( i = 0; i < 5; i++){
        console.log("for loop")
    }
}
//while loop
{
     i = 0
    while (i < 5){
        console.log("while loop")
        i++
    }
}
//do while loop
{
    i = 0
    do {
        console.log("do while loop")
    } while (i < 5)
}
//strings methods
//string length
{
    vari = "hello"
    console.log(vari.length)
}
//strings indeX
{
    vari = "hello"
    console.log(vari[3])
}
// /n
{
    vari = "hello \n world"
    console.log(vari)
}
//toUpperCase
{
    vari = "hello world"
    console.log(vari.toUpperCase())
}
//toLowerCase
{
    vari = "HELLO WORLD"
    console.log(vari.toLowerCase())
}
//trim
{
    vari = "  hello world  "
    console.log(vari.trim())
}
//slice 
{
    vari = "hello world"
    console.log(vari.slice(0, 5))
}
//arrays
{
    vari = ["a", "b", "c", "d"]
    console.log(vari)
}
//loop over array
{
    for (i = 0; i < vari.length; i++){
        console.log(vari[i])
    }
}
//array methods

//push
{
    vari = ["a", "b", "c", "d"]
    vari.push("e")
    console.log(vari)
}
//pop
{
    vari = ["a", "b", "c", "d"]
    vari.pop()
    console.log(vari)
}
//functions
{
    
}
