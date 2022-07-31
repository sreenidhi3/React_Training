var table = document.querySelector("tbody")
var loading = document.querySelector("#loading")

function updateTable(u) {
    let tableData = ""
    u.map((user) => {
      tableData += `<tr>
                <td>${user["id"]}</td>
                <td>${user["first_name"]}</td>
                <td>${user["last_name"]}</td>
                <td>${user["email"]}</td>
            </tr>`
})
    return tableData;
}



async function getData(){
  console.log("user")
  users = await fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    loading.style.visibility = "hidden"
    // console.log(users.data)
    const tableData = updateTable(users.data)
    table.innerHTML = table.innerHTML + tableData
    return users
}


function sortTableByName() {
loading.style.visibility = "visible"
console.log("sorting")
let sortedUsers = users.data.sort((a, b) => a.first_name > b.first_name ? 1: -1)
// const tableData = updateTable(sortedUsers)
// loading.style.visibility = "hidden"
// console.log(sortedUsers)
// table.innerHTML = tableData
setTimeout(()=>{let tableData = updateTable(sortedUsers)
    table.innerHTML = tableData
    document.querySelector("#loading").style.visibility = "hidden"
    }, 800)
}

function filterTable() {
    // Declare variables
    loading.style.visibility = "visible"
    let filter = document.getElementById("search").value.toUpperCase();
    let tr = document.getElementsByTagName("table")[0].getElementsByTagName("tr")
    let searchBy = "first_name"
    const radioButtons = document.querySelectorAll('input[name="search"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          searchBy = radioButton.value;
          break;
        }
    }  
    // Loop through all table rows, and hide those who don't match the search query
    // for (let i = 0; i < tr.length; i++) {
    //     let td = tr[i].getElementsByTagName("td")[searchBy]
    //   if (td) {
    //     // let txtValue = td.textContent || td.innerText;
    //     if (td.innerText.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }
    // }
    let filtered = users.data.filter((item)=>{
        // console.log(item)
       if (item[searchBy].toUpperCase().indexOf(filter)>-1){
        return item
       }        
    })
    document.querySelector("#loading").style.visibility = "visible"
    // console.log(filtered)
    setTimeout(()=>{let tableData = updateTable(filtered)
    table.innerHTML = tableData
    document.querySelector("#loading").style.visibility = "hidden"
    }, 800)
    
}

let users = getData()
console.log(users)













// const getData=async () => {
//     console.log("user")
//     var table = document.querySelector("table")
//     let users = await fetch("https://reqres.in/api/users")
//       .then(res => res.json())
//     console.log(users.data)
//     let tableData = updateTable(users)
//     return users;
//     // console.log(tableData)
//   };

// let users = await getData()
// function sortTableByName() {
//     console.log("sorting")
//     let sortedUsers = users.sort((a, b) => a.first_name > b.first_name ? a : b)
//     updateTable(sortedUsers)
//   }


// function updateTable(users) {
//     let tableData = ""
//     users.data.map((user) => {
//       tableData += `<tr>
//                         <td>${user["id"]}</td>
//                         <td>${user["first_name"]}</td>
//                         <td>${user["last_name"]}</td>
//                         <td>${user["email"]}</td>
//                     </tr>`
//     })
//     table.innerHTML = table.innerHTML + tableData
//   }