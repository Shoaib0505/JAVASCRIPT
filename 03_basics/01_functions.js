
function myfunc (){
    console.log("S");
    console.log("h");
    console.log("o");
    console.log("a");
    console.log("i");
    console.log("b");
}

// myfunc()

function addTowNum (num1, num2){
      //  let result = num1 + num2
    //  return result
 return num1 + num2   // esy b hota ha
}

let result = addTowNum(3,5)
//console.log("Result ", result);

function loginUserMessage (username = "khan"){
  if(!username){
    console.log("Please inter user name");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Shoaib"))
console.log(loginUserMessage());   //output : undefined
