function register(cb){
  setTimeout(()=>{
    console.log("Register here")
    cb();
   }, 5000);
}

function login(cb){
  setTimeout(()=>{
    console.log("login here")
    cb();
  },10000);
}

function getData(cb){
  setTimeout(()=>{
    console.log("Get Data from database")
  cb();
 },6000);
}

function displayData(){
  setTimeout(()=>{
    console.log("Display Data here")
  cb();
},8000);
}


// CallBack hell problem

register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
               });
       });
    });

console.log("Call another app")

