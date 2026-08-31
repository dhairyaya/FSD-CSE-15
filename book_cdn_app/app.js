import Book from "./book";
function App(){
   const bookstore=bookdata.map((b)=>{
    return Book(b);
})
   const div=React.createElement("div", {className:"bookstore"},bookstore)
   return div;
}

export default App;
