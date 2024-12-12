
const containe = document.querySelector("div")

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


range()

