
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
//console.log(loginUserMessage());   //output : undefined


function calculateCartPrice(...num1){
          return num1
}
//console.log(calculateCartPrice(200,  300, 400, 234,234,3456,765,));//we use rest operator(...)

const user = {
  username : "Shoaib",
  price  : 500
}

function handleObj(anyobject){
     console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
//  handleObj(user);

//there is another way to pass an obj this mathode is called direct object

// handleObj({
//   username : "Khan",
//   price: 399
// })


// For arrays

const newArray = [200,400,500,600]

function returnSecondValue(getArray){
  return getArray[2]
}
console.log(returnSecondValue(newArray));