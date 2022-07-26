//-----------------------------------------Q1.
let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender":"Male",
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
  "gender":"Female"
},  {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
  "gender":"Male"
}, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
  "gender":"Female"
}];

function mapBy(arr, label){
 	let newObj = {}
	arr.forEach(o=>newObj[o[label]]=o)
	console.log("o", newObj)
}

mapBy(users, "first_name") 

//---------------------------------------Q2. 

function groupBy(arr, label){
	let grouped= {}
	arr.forEach((o)=>{
		let key = o[label]
		if(key in grouped){
			grouped[key] = [...grouped[key], o]
		}else{
			grouped[key]=[]
			grouped[key]= [...grouped[key], o]
		}
	})
	return grouped
}
console.log(groupBy(users, "gender"))


//--------------------------------------Q3.

function compare(a,b){
	if(a>b){
		return 1
	}
	if(a<b){
		return -1
	}	
	return 0
}

function sort(arr, label, order){
	let sortedArr =[]
	sortedArr=[...arr]
	if(order == "asce"){
		sortedArr.sort((a,b)=>compare(a[label], b[label]))
		console.log("A")
	}
	else{
		sortedArr.sort((a,b)=>compare(b[label], a[label]))
		console.log("D")
	}
	return sortedArr
}
console.log(sort(users, "first_name", "desc"))
console.log(sort(users, "date_of_birth", "asce"))


//--------------------------------------Q4

let userNames = [{
  "id": 1,
  "first_name": "Nicki",
 }, {
  "id": 2,
  "first_name": "Raychel",
 },  {
  "id": 3,
  "first_name": "Demetris",
 }, {
  "id": 4,
  "first_name": "Amata",
 }]

let userEmails = [{
  "id": 2,
  "email": "rmcgrady1@cpanel.net",
}, {
  "id": 1,
  "email": "ncrozier0@squarespace.com",
}, {
  "id": 4,
  "email": "abraiden3@canalblog.com",
}, {
  "id": 3,
  "email": "dkilshall2@elpais.com",
}]

function mergeById(userNames, userEmails) {
	let mergedArray=[]
	//mergedArray = [...userNames]
	mergedArray = userNames.map((item)=>{
		let user = userEmails.find((i)=>i.id === item.id)
	console.log(user)
		return {...item, ...user}	
	})
	return mergedArray
}

console.log(mergeById(userNames, userEmails))


//------------------------------------------Q5.

let stringArr = ["name", "Nicki", "Nicki", "Amata", "name", "Amata"]

function filterArray(arr){
	let f = []
	for (let i=0; i<arr.length; i++){
		if(!f.includes(arr[i])){
			f.push(arr[i])
		}
	}
	return f
}
console.log(filterArray(stringArr))