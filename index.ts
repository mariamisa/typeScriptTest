// try to access prop not exist on object 

// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth; //with js will get undefined but throw error on ts


// console.log(4 / []); on js get infinity but ts error 


// let greeting:string="hello"; // define type if we assign diff type value throw error

//describe object shape using interface declaration
// interface User{
//     name:string;
//     id:number
// }

// const user:User={
//     name:"mariam",
//     id:0
// }

// we can use interface with classes and oop
// interface User {
//     name: string;
//     id: number;
//   }
  
//   class UserAccount {
//     name: string;
//     id: number;
  
//     constructor(name: string, id: number) {
//       this.name = name;
//       this.id = id;
//     }
//   }
  
//   const user: User = new UserAccount("Murphy", 1);

// composing types
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
//Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
    return obj.length;
  }