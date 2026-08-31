function Book(props){
    return (
        <div>
            <img src="" alt="" height="200px" width="200px"/>
            <h2><Title>React.JS</Title></h2>
            <h2>₹450</h2>
        </div>
    )
}

function App(){
    return(
        <div>
            <Book/>
        </div>
    );
}

const parent=document.getElementById("root")
const root=ReactDOM.createRoot(parent)

root.render(<App />)