
const bookdata=[
    {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",price:425},
    {image:"https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=150&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",price:627},
    {image:"https://th.bing.com/th/id/OIP.Dhrtxzmwv3Ak76bCx3ag1QHaJI?w=158&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",price:248},
]
function book(data){
const div=document.createElement("div")
div.setAttribute("class","book")
const image=document.createElement("img")
image.setAttribute("src",data.image)
image.setAttribute("width","100px")
image.setAttribute("height","100px")
const h2=document.createElement("h2")
h2.innerText=("Price:"+"₹"+data.price)
const bt=document.createElement("button")
bt.innerText=("Add To Cart")
bt.onclick=()=>(addtocart(data))
div.append(image)
div.append(h2)
div.append(bt)
return div
}
function addtoCart(data){
   cart.push(data)
   console.log(data + " added to cart")
   alert("book added successfully")
}
const parent=document.getElementById("bookstore")
for (i of bookdata){
    parent.appendChild(book(i))
}
