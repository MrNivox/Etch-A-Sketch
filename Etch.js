
const containe = document.querySelector("div")

function range(range)
{
 for(i = 0; i < range + 1; i++)
 {
  const div = document.createElement("div")
  div.innerText = i
  containe.appendChild(div)

 }


}

range(16)

