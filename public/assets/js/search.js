//search by click
document.getElementById("searchBtn").onclick = function () {
  event.preventDefault()
  //Code for search functionality goes here

}

//search by button enter
var input = document.getElementById("searchTerm")
input.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    //Code for search functionality goes here
  }
})