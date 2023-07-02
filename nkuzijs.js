const piaButton = document.getElementById("jsnaigbo");
const jsnaihe = document.getElementById("jsnaihe");
const botinuObara = document.getElementById("jsnaoba");

piaButton.addEventListener("click", function() {
  alert("ba ta na javascript external file");
});

//javascript statement 

let myIgboJavascript = 2;
var iheNkuzi = "bia nu";

//javascript variable 

var NaIgbo = "asusu computa na igbo"
let iheNkeOzo = "aha variable"
const nkeabuConst  = true

//var keyword

var ihebuVarKeyword = "yes"
var ihebuVarKeyword = "no"

//let keyword

let ihebuLet = "yes"


// const keyword

const ihebuConst = "na eziaha"

//Data Types

//String
//Number
//Bigint
//Boolean
//Undefined
//Null
//Symbol
//Object


//String 

let kowaString = "Ihe bu nke ana akpo string na javascript"

//Numbers

const kowaNumber = 30000

//Boolean

var kowaBoolean = false

//undefined 

let kowaUndefined

//null 

let kowaNull = null

//object

const kowaObject = {aham: "Temple Ndukwu", onyisiNkuziBu: "Ijemma Onwuzuike", developer: true}

const KowaArray = ["temple", "Ijemma", "name", 8, null, true, ["arrayoz", {objectoozor: "new"}]]


//comment

// const kowaObject1 = {aham: "Temple Ndukwu", onyisiNkuziBu: "Ijemma Onwuzuike", developer: true}

// const KowaArray1 = ["temple", "Ijemma", "name", 8, null, true, ["arrayoz", {objectoozor: "new"}]]

//operators

//arithmetic operator
let x = 2 * 6
let y = 9 - 2
let z = 4 + 2
let di = 4 / 2

//assignment  operator

let assignOperator = "kowa assign operator"

// let xy = 11

// xy += 5

// -=

// *=

//comparison operators

// ==
// ===
// !=
// !==
// >
// <
// >=
// =<
// ?

let ise = 5
let ato = 3

// if(ise > ato){
//     alert("ehhh obu ezia")
// }else{
//     alert("ehhh obu azi")
// }


//Date

let d = new  Date()

console.log("console", d)

//function

function functionNkeObara(){
    document.body.style.background = "red";
}


function functionNkeGreen(){
    document.body.style.background = "green";
}



jsnaihe.addEventListener("click", function() {
//   alert("botinu functionNkeGreen");
  functionNkeGreen()
});
botinuObara.addEventListener("click", function() {
//   alert("botnu nke functionNkeObara");

functionNkeObara()


});



function AhaFunctionMu(){
    console.log("A nam amuta javascript")
}
AhaFunctionMu()





const nkeabuArrowFunction = () => {
    console.log("A nam amuta  arrow function na javavascript")
}
nkeabuArrowFunction()

//control flow

if(ise){

}else{

}

//switch

let expression = true

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }



//for loop

  
const KowaForLoop = ["temple", "Ijemma", "name"]

  for (let i = 0; i < KowaForLoop.length; i++) {

    console.log(i);
  }
  

