let obj = {
	name:"Harry Potter",
	age: 12,
	address: {
		details: ["4", "Privet Drive"],
		area:"Little Whinging",
		city: "Surrey",
		state: "England"
	} 
}

let objCopy = JSON.parse(JSON.stringify(obj))
objCopy.address.details[0]="5"
console.log("deep copy obj: ", objCopy)
console.log("obj: ", obj)

//let newObj = Object.assign(obj, {});
//newObj.address.details[0] = "5"
//console.log("new obj: ", newObj)


let obj1 = {
	a:"Apple",
	b:["Basketball","Baseball"],
	c: {
		call: "cellphone"
	},
	d: "Dog"
}

function filterObj(){
	let objectFiltered = {}
	for (const [key, value] of Object.entries(obj1)) {
		//console.log(typeof(value))
  		if(!(typeof(value)=='object')){
			//console.log("1", typeof(value))
			objectFiltered[key]=value
		}
	}
	return objectFiltered
}
let res = filterObj()
console.log(res)


