
const containe = document.getElementById("container")
const OtherC = document.getElementById("OtherC")
let x = null
function range(range = 16)
{
 for(i = 0; i < (range * range ) ; i++)
 {
  const div = document.createElement("div")

  div.id = "item"
  div.style.width = 960/range  + "px"
  div.style.height = 960/range + "px"
  containe.appendChild(div)
  
  div.addEventListener("mouseover", function changeColor()
  {
    div.style.backgroundColor = "black"


  })

 }


}

const btn = document.createElement("button")
btn.style.width = "200px"
btn.style.height = "200px"
btn.innerText = "Reset"
btn.style.fontSize = "45px"
OtherC.appendChild(btn)


range()
btn.addEventListener("click", function clearAdd()
{
  while (containe.firstChild)
    {
    containe.firstChild.remove()
    }
  let input = window.prompt("what size?" , "16")
  while (containe.firstChild)
  {
  containe.firstChild.remove()
  }

  range(input)
})






