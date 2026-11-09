const prompt = require("prompt-sync")()

let exit = false
class User{
    name
    age
}

while (!exit) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log("   [1] HELLO")
  console.log("   [2] CREATE")
  console.log("   [3] READ DATA")
  console.log("   [0] EXIT")
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~")

  let action = Number(prompt("ACTION: "))

  switch (action) {
    case 1:
      console.log("hello world")
      break
    case 2:
      console.log("create")
      break
    case 0:
      exit = true
      break
    default:
      break
  }
 
}
function create() {
  console.clear()
  let name = prompt("NAME: ")
  let age = Number(prompt("AGE: "))

  let user = new User()
  user.name = name
  user.age = age

  console.log(user)
}
/**npm install prompt-sync  swits elagazas */
/**node 01-crud.js futtatas
 * minden konzolos beolvasas stringet olvas be
*/