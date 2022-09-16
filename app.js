function validate() {
    var email = document.forms["form"]["email"].value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        alert(text);
        console.log(text);
        return false;
    }
    alert("Form Submitted Successfully!");
    console.log("Form Submitted Successfully!");
    return true;
}

function display() {
    var email = document.getElementById("email").value;

    var text;
    text = "Email:" + email + "\n ";
    if (document.getElementById('academic1').checked) {
        text = text + "academic:" + "Upper 1 to 2% "+ "\n";
    }
    else if (document.getElementById('academic2').checked) {
        text = text + "academic:" + "Upper 10%"+ "\n";
    }
    else if (document.getElementById('academic3').checked) {
        text = text + "academic:" + "Upper 25%"+ "\n";
    }
    else if (document.getElementById('academic4').checked) {
        text = text + "academic:" + "Upper 50%"+ "\n";
    }
    else if (document.getElementById('academic5').checked) {
        text = text + "academic:" + "Lower Half "+ "\n";
    }
    else if (document.getElementById('academic6').checked) {
        text = text + "academic:" + "No basis for Judgement"+ "\n";
    }
    else{
        text = text + "academic:" + "- "+ "\n";
    }

    if(document.getElementById('intellectual1').checked){
        text = text + "intellectual:" + "Upper 1 to 2% "+ "\n";
    }
    else if(document.getElementById('intellectual2').checked){
        text = text + "intellectual:" + "Upper 10%"+ "\n";
    }
    else if(document.getElementById('intellectual3').checked){
        text = text + "intellectual:" + "Upper 25%"+ "\n";
    }
    else if(document.getElementById('intellectual4').checked){
        text = text + "intellectual:" + "Upper 50%"+ "\n";
    }
    else if(document.getElementById('intellectual5').checked){
        text = text + "intellectual:" + "Lower Half"+ "\n";
    }
    else if(document.getElementById('intellectual6').checked){
        text = text + "intellectual:" + "No basis for Judgement"+ "\n";
    }
    else{
        text = text + "intellectual:" + "- "+ "\n";
    }

    if(document.getElementById('express1').checked){
        text = text + "express:" + "Upper 1 to 2% "+ "\n";
    }
    else if(document.getElementById('express2').checked){
        text = text + "express:" + "Upper 10%"+ "\n";
    }
    else if(document.getElementById('express3').checked){
        text = text + "express:" + "Upper 25%"+ "\n";
    }
    else if(document.getElementById('express4').checked){
        text = text + "express:" + "Upper 50%"+ "\n";
    }
    else if(document.getElementById('express5').checked){
        text = text + "express:" + "Lower Half"+ "\n";
    }
    else if(document.getElementById('express6').checked){
        text = text + "express:" + "No basis for Judgement"+ "\n";
    }
    else{
        text = text + "express:" + "- "+ "\n";
    }

    if(document.getElementById('motivation1').checked){
        text = text + "motivation:" + "Upper 1 to 2% "+ "\n";
    }
    else if(document.getElementById('motivation2').checked){
        text = text + "motivation:" + "Upper 10%"+ "\n";
    }
    else if(document.getElementById('motivation3').checked){
        text = text + "motivation:" + "Upper 25%"+ "\n";
    }
    else if(document.getElementById('motivation4').checked){
        text = text + "motivation:" + "Upper 50%"+ "\n";
    }
    else if(document.getElementById('motivation5').checked){
        text = text + "motivation:" + "Lower Half"+ "\n";
    }
    else if(document.getElementById('motivation6').checked){
        text = text + "motivation:" + "No basis for Judgement"+ "\n";
    }
    else{
        text = text + "motivation:" + "- "+ "\n";
    }


    console.log(text);
    alert(text);
}