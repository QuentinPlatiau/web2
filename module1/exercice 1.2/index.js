const dateTimeNow = new Date();
const btn1 = document.querySelector("#myBtn1");
btn1.addEventListener("click", addDateTime);

console.log(dateTimeNow.toLocaleDateString()); // 20/10/2022
console.log(dateTimeNow.toLocaleTimeString()); // 13:57:15
console.log(message);

function addDateTime(){
    const message = document.querySelector("#message").value;
    alert(dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString()+" "+message);
}
