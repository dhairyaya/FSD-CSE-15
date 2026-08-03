// Single threaded
// Event Based
// Non blocking I/O - Synchronous processing f1() -> f2() -> f3()-> main()

function register(){
  waitforseconds(5000);
  console.log("register here")
}

function login(){
  waitforseconds(10000);
  console.log("login here")
}

function getData(){
  waitforseconds(6000);
  console.log("get data from database")
}

function displayData(){
  waitforseconds(8000);
  console.log("Display data here")
} 

function waitforseconds(delay){
    const start=Date.now()+delay;
    while((Date.now())<start){
    }
}
register();
login();
getData();
displayData();
console.log("Call Another Application")
