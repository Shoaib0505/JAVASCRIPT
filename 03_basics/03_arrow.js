
const user = {
    username : "Shoaib",
    price : 399,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome in the website`);
        console.log(this);
    }
}
//  user.welcomeMessage();
//  user.username= "Shoaib khan";
//  user.welcomeMessage()

// console.log(this);

// function chai (){
//          let username = "Shoaib"
//          console.log(this.username);
// }

// const  chai = function (){
//          let username = "Shoaib"
//          console.log(this.username);
// }


// const  chai =  () => {
//          let username = "Shoaib"
//          console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) =>  num1+num2 //new mathode

// const addTwo = (num1, num2) =>  (num1+num2) //new mathode 3

const addTwo = (num1, num2) =>  ({username: "Shoaib"}) //new mathode 3

console.log(addTwo(3,5))

