var ul = document.getElementById("list-container")
var input = document.getElementById("input")

function addtask() {
  var listitem = document.createElement("li")
  listitem.innerHTML = input.value + "<button onclick='removetask(event)'>Delete</button>"
  ul.append(listitem)
}

function removetask(event) {
  event.target.parentElement.remove()
}