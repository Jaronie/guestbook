    function mailingListToggle(){

        let checkbox_visible = false;
        // checkbox element for mailing list
        let checkbox = document.getElementById("mailing-list");
        
        // email format div class
        let email_format = document.querySelector(".email-format");

        // if checkbox is checked, display format options
        if(checkbox.checked == true){
            checkbox_visible = true;
            email_format.style.display = "block";

        }
        else {
            checkbox_visible = false;
            email_format.style.display = "none";
        }
        return {
            checkbox,
            checkbox_visible
        }
    }
function otherToggle(){
    // other field div class    
    let other_field = document.querySelector(".other-field");
    
    // meet select element
    const meet = document.getElementById("meet");

    // if other option is selected, show other field
    if(meet.value == "other"){
        other_field.style.display = "block";
    }
    else {
        other_field.style.display = "none";
    }
}

// Validation functionality for form submission
document.getElementById("guest-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;
    let job = document.getElementById("job-title").value;
    let linkedin = document.getElementById("linkedin").value;
    let mail_function = mailingListToggle();


    let n = email.search(/@/);
    let dot = email.lastIndexOf(".");

    if(!fname){
        document.getElementById("err-fname").style.display = "inline";
        isValid = false;
    }
    if(!lname){
        document.getElementById("err-lname").style.display = "inline";
        isValid = false;
    }
    if(!email || n < 1 || dot < n + 2 || dot + 2 >= email.length){
        document.getElementById("err-email").style.display = "inline";
        isValid = false;
    }
    if(meet.value == "none"){
        document.getElementById("err-meet").style.display = "inline";
        isValid = false;
    }
    if(linkedin && !linkedin.startsWith("https://www.linkedin.com/")){
        document.getElementById("err-linkedin").style.display = "inline";
        isValid = false;
    }
    if(job && !company){
        document.getElementById("err-company").style.display = "inline";
        isValid = false;
    }
    if(company && !job){
        document.getElementById("err-job-title").style.display = "inline";
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
