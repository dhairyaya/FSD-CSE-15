// Single threaded
// Event Based
// Non blocking I/O - Synchronous processing f1() -> f2() -> f3()-> main()

// Async programming using setTimeout() is faster than synchronous . It uses event queue.

// JavaScript Code
//        |
//        v
// +----------------+
// |   Call Stack   |
// +----------------+
//        |
//        | Async Task?
//        |
//        v
// +----------------+
// |     libuv      |
// | (Background)   |
// +----------------+
//        |
//        | Task completed
//        |
//        v
// +----------------+
// |  Event Queue   |
// +----------------+
//        |
//        v
// +----------------+
// |   Event Loop   |
// +----------------+
//        |
//        v
// +----------------+
// |   Call Stack   |
// +----------------+



// async function
function register(){
  setTimeout(()=>(
    console.log("Register here")
  ),5000);
}

function login(){
  setTimeout(()=>(
    console.log("login here")
  ),10000);
}

function getData(){
  setTimeout(()=>(
    console.log("Get Data from database")
  ),6000);
}

function displayData(){
  setTimeout(()=>(
    console.log("Display Data here")
  ),8000);
}

register();
login();
getData();
displayData();
console.log("Call Another Application")
