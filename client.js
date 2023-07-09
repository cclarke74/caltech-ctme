console.log("hi")
const user = localStorage.getItem("loginUser")
const userInfo = JSON.parse(user)
console.log({userInfo});
if(userInfo.length!==0){
document.getElementById('nameId').innerHTML = userInfo.name;
document.getElementById('emailId').innerHTML = userInfo.email;
}