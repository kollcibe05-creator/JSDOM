const root = document.getElementById("root")
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
title.style.backgroundColor = "black"
title.style.textAlign = "center"

// image.style.display = "flex"
// image.style.justifyContent = "center"
// image.style.alignItems = "center"
image.style.marginLeft = "50%"

div.appendChild(title)

root.appendChild(div)

