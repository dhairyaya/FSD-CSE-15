function addParagraph(){
     const para=document.createElement("p");     // "p"  represents <p> HTML tag.
     para.innerText="This is new paragraph";
     para.style.color="red";
     const parent=document.getElementById("para");
     parent.appendChild(para);
}

function removeParagraph(){
    const para=document.querySelector("p")
    const parent=document.getElementById("para")
    parent.removeChild(para)
}

function removeAllParagraph(){
    const para=document.querySelectorAll("p")
    const parent=document.getElementById("para")
//    for (i in para){
//       parent.removeChild(para)
//  }

   para.forEach(i=>{ 
      parent.removeChild(i)
   })
   }
