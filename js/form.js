var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var submitButton = document.getElementById("enviar");
var text_area = document.getElementById("text-area");

var radioOptions = {
    option1: document.getElementById("social-media"),
    option2: document.getElementById("estdudiamos-juntos"),
    option3: document.getElementById("hackaton"),
    option4: document.getElementById("otro")
};

function toggle(elemento){
   if(radioOptions.option1.checked || radioOptions.option3.checked || radioOptions.option2.checked ){
        console.log("Cheched one of the radio buttons");
         $('.textArea-square').css("display", "none");
    }else{
        console.log("Cheched OTRO button");  
        $('.textArea-square').css("display", "block");    
    }        
}

if(radioOptions.option1.checked || radioOptions.option3.checked || radioOptions.option2.checked ){
    console.log("Cheched one of the radio buttons")
}
var validateTextArea = radioOptions.option4;
validateTextArea.addEventListener('click', function(event){
    $('.textArea-square').css("display", "block");
});

var loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

$('.text-area').blur( function (event) {
    event.preventDefault();
    var numeroPalabras = this.value.split(' ').length;
    document.getElementById("demo").innerHTML = "<small>Palabras escritas </small> <b>" + numeroPalabras + "</b>"
    if(numeroPalabras > 150){
        alert('Numero de palabras excedidas, favor de veriircar')
        return;
    }else{
        return true;
    }
    
}) 

var loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var result = document.getElementById('result');

form.addEventListener("submit", function (event) {
   
    if (inputNombre.checkValidity() === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if(inputApellidos.checkValidity() === false){
        alert("Escribe tu apellidos(s)");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

   if (emailInput.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (radioOptions.option1.checkValidity() === false) {
        alert("Introduce el tipo de mision");
        event.preventDefault();
        return false;
    }

    if(validateTextArea.checkValidity() === false){
        alert("Es necesario llenar el campo de 'Text Area ' ");
        $('.text-area').focus();
        event.preventDefault();
        return false;
    }
 

    submitButton.setAttribute("disabled", "");
    submitButton.appendChild(loadingIcon);
    event.preventDefault();

    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);
});


