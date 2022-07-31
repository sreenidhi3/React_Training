//------------------------------------------Q1
console.log("----------Q1")

const func = async() => {
  console.log("Printing before")
  //Call your function here eg. sleep(10000)
  delay(3000)
  console.log("Printing after")
}

const delay = (time) => {
  setTimeout(() => {console.log("DELAYED FROM Q1 FOR",time," milliseconds") }, time)
}

func()

//------------------------------------------Q2
console.log("----------Q2")

const fetchData = (url)=>{
	const promise = fetch(url)
	promise.then(value=>console.log(value))
	console.log("Data is being fetched")
}

fetchData("https://reqres.in/api/users")

//------------------------------------------Q6

console.log("----------Q6")

const promise1 = fetch("https://reqres.in/api/users")
promise1.then((value)=>{
	console.log("Delaying...")
	setTimeout(()=>{console.log("using promise: ", value)}, 2000)
})


//------------------------------------------Q7
console.log("----------Q7")

const funct= async ()=>{
	const data = await fetch("https://reqres.in/api/users")
	setTimeout(()=>{console.log("using async await: ", data)}, 2000)
}
funct()