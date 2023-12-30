console.log("started");
document.getElementById('btn').onclick=function(){
    const km = document.getElementById('km').value;
    console.log(km);
    const mile = km * 0.621371;
    console.log(mile);

    document.getElementById('res').innerHTML = "The value of " + km + " in miles is: " + mile;
}