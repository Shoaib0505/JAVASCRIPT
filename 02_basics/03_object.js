// sigleton : jab ap object ko constructor se bnaty hain tu wo sigleton kehlata hai...

// Objects Littrels
 
const mySym = Symbol("Sumbol")

const obj = {
    "name" : "Shoaib Khan",
    [mySym] : "This is symbol",
    Hobby : "Programming",
    email : "khan@google.com",
    location: "Islamabad",
    isloggedIn : false,
    lastloggedInDays : ["Monday","Saturday"]
}

// console.log(obj.name);
// console.log(obj[mySym]);
// console.log(typeof mySym);

obj.email = "Shoaib@microsoft.com"
// Object.freeze(obj)
obj.email = "asdfgdfdsd@.com"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello objects");
}
obj.greetingtwo = function(){
    console.log(`Hello objects ${this.name}`);
}
console.log(obj.greeting());
console.log(obj.greetingtwo());.