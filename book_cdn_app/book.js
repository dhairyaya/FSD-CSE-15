function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"})
    const title=React.createElement("h2",{style:{color:"red"}},props.title)
    const Price=React.createElement("h2",{style:{color:"blue"}},props.Price)
    const btn=React.createElement("button",{style:{color:"green"}},"Add to Cart")
    const div=React.createElement("div",{className:"card"},[image,title,Price,btn])
    return div;

}
export default Book;