let a
console.log(typeof(a))
a =50
console.log(typeof(a))

let b = "hello"
console.log(typeof(b))

let c = 2.312
console.log(typeof(c))

let x = NaN
console.log(typeof(x))

console.log(isNaN(x))
console.log(isNaN("452"/2))
console.log(isNaN("dsbhdjk"/2))


let y = 4>2
console.log(typeof(y))

let arr = [2, 24, 90]
console.log(typeof(arr))
console.log("Checking is instanceOf Array ", arr instanceof Array)
console.log("Checking isArray() ", Array.isArray(arr) )

let z = null
console.log(typeof(z))
console.log("null is instanceof object ", null instanceof Object)


let sports = {"Outdoor" : ["Cricket", "Football", "Lawn Tennis" ], "Indoor" : ["Chess", "Badminton"]}
console.log(typeof sports)
console.log("Checking is instanceOf Object ", sports instanceof Object)



