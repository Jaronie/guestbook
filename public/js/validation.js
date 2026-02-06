function mailingListToggle(){

    // checkbox element for mailing list
    let checkbox = document.getElementById("mailing-list");
    
    // email format div class
    let emailFormat = document.querySelector(".email-format");

    // if checkbox is checked, display format options
    if(checkbox.checked == true){
        emailFormat.style.display = "block";
    }
    else {
        emailFormat.style.display = "none";
    }
}

document.getElementById("guest-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    if(!fname){
        document.getElementById("err-fname").style.display = "inline";
        isValid = false;
    }
    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i=0;i<errors.length;i++){
        errors[i].style.display = "none";
    }
}