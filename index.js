const root = document.getElementById("root")


//random stuff - enforce styling selecting attributes etc,
const div = document.createElement("div")
const image = document.createElement("img")
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqXeRnKso45KMLmbJp2Wfr_Cy785NEQrmkw&s"
image.alt = "Ngrrrrrr!"
image.classList= "image"
div.appendChild(image)

const title = document.createElement("h4")
title.className = "title"
title.textContent = "BOOYAH!"
title.style.color = "tomato"
// title.style.backgroundColor = "black"
// title.style.textAlign = "center"

// image.style.display = "flex"
// image.style.justifyContent = "center"
// image.style.alignItems = "center"
// image.style.marginLeft = "50%"

div.appendChild(title)
root.appendChild(div)
const btn = document.createElement("button")
btn.textContent = "Click Me"
btn.id = 'btn'
div.appendChild(btn)

btn.addEventListener("click", () => {
    console.log("Hehehe It tickles")
    alert("Hehehe It tickles")
})
//







//form function 
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
  handleTodo(e.target.field.value) //calls the important function below this
 form.reset()  //resets the function after input
})


function handleTodo (todo) {
   console.log(todo)
   //Creating the todo element
   let p = document.createElement('p')
   p.textContent = todo 
   const button = document.createElement("button")
   button.textContent = "X"
   button.type = "button"
   button.id = "delete"
   p.appendChild(button)
  const todoList =  document.querySelector("#to_do") 
  console.log(todoList)
   todoList.appendChild(p)
   //

   //handle delete

   button.addEventListener("click",() => {
            p.remove() //works by acting on the parent component ~ inbuilt
   })
} 



//Alternate function to be passed to event "click to the button"
function AlternateDeleteFunctionToBePassedToEvent () {
    e.target.parentNode.remove()
}

