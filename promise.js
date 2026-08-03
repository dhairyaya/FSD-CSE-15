function register(){
  return new Promise((resolve,reject)=>{;
    setTimeout(()=>{
      console.log("Register here")
      resolve();
   }, 5000);
});
}

function login(){
  return new Promise((resolve,reject)=>{;
    setTimeout(()=>{
      console.log("login here")
      reject("login failed");
   }, 10000);
});
}

function getData(){
  return new Promise((resolve,reject)=>{;
    setTimeout(()=>{
      console.log("get data here")
      resolve();
   }, 6000);
});
}
function displayData(){
  setTimeout(()=>{
    console.log("Display Data here")
},8000);
}

// register().then(login).then(getData).then(displayData).catch((err)=>{
//        console.log("Error", err)
// });

async function test() {
  try{
     await register();
     await login();
     await getData();
     displayData();
  }
  catch(err){
       console.log("Error", err)
  }
}

console.log("Call another app")
