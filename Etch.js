
const containe = document.querySelector("div")

function range(range)
{
 for(i = 0; i < (range * range ) ; i++)
 {
  const div = document.createElement("div")
  div.innerText = i
  div.id = "item"
  div.style.width = 750/range  + "px"
  div.style.height = 750/range + "px"
  
  
  containe.appendChild(div)

 }


}

range(16)

