let enterName = document.getElementById("fname");
let proName = document.getElementById("pname");
let enterAge = document.getElementById("age");

let flag = 1;

function vaildForm(){
    if(enterName.value==""){
        document.getElementById("error").innerHTML="Error: Please Make sure All the filled before adding in an eployee!";
        flag = 0;
    }
    else{
        document.getElementById("error").innerHTML="Success: Employee Added!";
        flag = 1;
    }
    if(proName.value==""){
        document.getElementById("error").innerHTML="Error: Please Make sure All the filled before adding in an eployee!";
        flag = 0;
    }
    else{
        document.getElementById("error").innerHTML="Success: Employee Added!";
        flag = 1;
    }
    if(enterAge.value==""){
        document.getElementById("error").innerHTML="Error: Please Make sure All the filled before adding in an employess!";
        flag = 0;
    }
    else{
        document.getElementById("error").innerHTML="Success: Employee Added!";
        flag = 1;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}