//------------------Q1.  

document.querySelectorAll("p").forEach(elem => elem.innerText = "How's the Josh?");

//------------------Q2

let place = document.getElementById("info-contents")
let node1 = document.createElement("p")

const changeSpeed = () => {
  document.querySelector("video").playbackRate = "3";
}

node1.innerHTML("<button id=\"change-speed\" onclick=\"changeSpeed()\"> Change Speed <button>")
place.appendChild(node1)

//------------------Q3
const url = "https://reqres.in/api/users"
function sendBlog(e) {
  e.preventDefault();
  var title = document.querySelector("#title").value
  console.log(title)
  var desc = document.querySelector("#desc").value
  let data = { "title": title, "body": desc }
  console.log(data)
  fetch("https://reqres.in/api/users", {
    method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  }).then((res) => {
    if (res) {
      res.json().then((data) => console.log(data))
    }
  })
}
