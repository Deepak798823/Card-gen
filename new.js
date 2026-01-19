let inputs=document.querySelectorAll("input")
let div=document.querySelector("#main")
let form =document.querySelector("form")

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    let card=document.createElement("div")
    card.classList.add("a")

    let div2=document.createElement("div")
    div2.classList.add("b")

    let img=document.createElement("img")
    img.setAttribute("src", inputs[0].value)

    let h2=document.createElement("h2")
    h2.innerText=inputs[1].value

    let h4=document.createElement("h4")
    h4.innerText=inputs[2].value

    let p=document.createElement("p")
    p.innerText=inputs[3].value

    div2.appendChild(img)
    card.appendChild(div2)

    card.appendChild(h2)
    card.appendChild(h4)
    card.appendChild(p)

    div.appendChild(card);

    inputs.forEach((input)=>{
        if(input.type!=="submit"){
            input.value="";
        }
    })
})