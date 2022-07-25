let data = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09"
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05"
}, {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31"
}, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23"
}, {
  "id": 5,
  "first_name": "Venita",
  "email": "vheap4@clickbank.net",
  "date_of_birth": "2020/10/04"
}, {
  "id": 6,
  "first_name": "Fairfax",
  "email": "fcrichton5@merriam-webster.com",
  "date_of_birth": "2009/12/23"
}, {
  "id": 7,
  "first_name": "Kathleen",
  "email": "kvasyukhnov6@devhub.com",
  "date_of_birth": "2010/12/20"
}, {
  "id": 8,
  "first_name": "Sam",
  "email": "scorck7@sitemeter.com",
  "date_of_birth": "2020/08/30"
}, {
  "id": 9,
  "first_name": "Virgilio",
  "email": "vferandez8@e-recht24.de",
  "date_of_birth": "2000/09/07"
}, {
  "id": 10,
  "first_name": "Townie",
  "email": "tpetyt9@upenn.edu",
  "date_of_birth": "2018/09/01"
}]



//---------------Q1.

function filterByName(name){
	let result = data.filter(item=>item.first_name.includes(name))
	console.log(result)
	return result;
}

filterByName("Ray")


let emailList = data.map(item=>item.email)
console.log(emailList)

function checkDate(item1, item2){
	let d1 = new Date(item1.date_of_birth)
	let d2 = new Date(item2.date_of_birth)
	return d1-d2
}

let sortedByDOB = data.sort(checkDate)
console.log(sortedByDOB)

function getById(id){
	let user = data.filter(item=>parseInt(item.id) == id)
	console.log(user)
}
getById(10)
