// function createUser(firstName, lastName, age) {
//   (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
// }

// createUser.prototype.findYear = function () {
//   return new Date().getFullYear() - this.age;
// };

// const user1 = new createUser("anurag", "sign", 32);
// const user2 = new createUser("ani", "PRe", 24);

// class CreateUser {
//   constructor(firstName, lastName, age) {
//     (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
//     getFullName = function () {
//       return this.firstName + " " + this.lastName;
//     };
//   }
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }
// }

// const user1 = new CreateUser("Anu", "re", 26);

// const user = {
//   firstName: "first",
//   lasName: "last",
//   get fullName() {
//     return `${this.firstName} ${this.lasName}`;
//   },
//   set fullName(value) {
//     return value;
//   },
// };

// class CreateUser {
//   constructor(firstName, lastName, age) {
//     (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   getBirthYear() {
//     console.log(this);
//     return new Date().getFullYear() - this.age;
//   }
// }

// class Student extends CreateUser {
//   constructor(firstName, lastName, age, standard) {
//     super(firstName, lastName, age);
//     this.standard = standard;
//   }
//   details() {
//     console.log(this.firstName, this.standard, this);
//   }
// }

// const st1 = new Student("Anu", "Re", 32, "MCA");

// const userObj = {
//     firstName: 'Anu',
//     lastName:'Re',
//     a:[1,3,4,5],
//     printA(){
//         this.a.forEach((value)=>{
//             console.log(value,this.firstName)
//         })
//     }
// }

async function getData() {
  const data = await fetch("https://restcountries.com/v3.1/name/eesti", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((data) => console.log(data));

  console.log(data);
}

let addDate = document.querySelector(".date");
addDate.innerText = new Date();
