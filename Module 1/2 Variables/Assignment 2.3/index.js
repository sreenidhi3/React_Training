let marks = [20, 201, "mike ross", 378.382]
console.log("Original: ", marks)

marks[1]= 36
console.log("Modify: ", marks)

marks = [20,3, 90]
console.log("Reassign Value: ", marks)

let user = {
		name: "Sreenidhi Bendre",
		age: 21,
		userId: "sreenidhi3",
		}
console.log("Original: ", user)
user.name = "Nick Halden"
user.email = "nick@gmail.com"
delete user.age
console.log("Modify: ", user)

user = {
		name: "Sreenidhi Bendre",
		age: 21,
		userId: "sreenidhi3",
	}

console.log("Reassign: ", user)

const mark = [20, 201, "mike ross", 378.382]
console.log("Original: ", mark)
mark[1]= 36
console.log("Modify ", mark)
//mark = [20,3, 90]
//console.log(mark) error-> assignment to constant variable


const person = {
		name: "John Doe",
		age: 28,
		userId: "johndoe_",
		}
console.log("Original: ", person)
person.name = "Jane Doe"
person.email = "janerocks@gmail.com"
delete person.age
console.log("Modify: ", person)
/*
person =   {
		name: "John Doe",
		age: 28,
		userId: "johndoe_",
		}
*/
//console.log(person)
