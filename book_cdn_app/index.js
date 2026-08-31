import App from "./app";

function App(){
   const bookstore=bookdata.map((b)=>{
    return Book(b);
})
   const div=React.createElement("div", {className:"bookstore"},bookstore)
   return div;
}
function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"})
    const title=React.createElement("h2",{style:{color:"red"}},props.title)
    const Price=React.createElement("h2",{style:{color:"blue"}},props.Price)
    const btn=React.createElement("button",{style:{color:"green"}},"Add to Cart")
    const div=React.createElement("div",{className:"card"},[image,title,Price,btn])
    return div;

}
const bookdata=[
    {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",title:"React JS",Price: 465},
    {image:"https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=150&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",title:"ExpressJS",Price: 795},
    {image:"https://th.bing.com/th/id/OIP.Dhrtxzmwv3Ak76bCx3ag1QHaJI?w=158&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",title:"NodeJS",Price: 390},
    {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",title:"React JS",Price: 465},
    {image:"https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=150&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",title:"ExpressJS",Price: 795},
    {image:"https://th.bing.com/th/id/OIP.Dhrtxzmwv3Ak76bCx3ag1QHaJI?w=158&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",title:"NodeJS",Price: 390}
]

const parent=document.getElementById("root")
const root=ReactDOM.createRoot(parent)
root.render(React.createElement(App));