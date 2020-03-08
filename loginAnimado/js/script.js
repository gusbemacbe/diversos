/* Script do projeto login Animado */
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click",(event) => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
      if (field.value === "") form.classList.add("validate-error");
    });
  
    const formError = document.querySelector(".validate-error");
    if (formError) {
      formError.addEventListener("animationend", event => {
        if (event.animationName === "treme") {
          formError.classList.remove("validate-error");
        }
      });
    } else {
       form.classList.add("form-hide");
    }
});

/* Conserta o bug do formulario continuar na tela apos rolagem */
form.addEventListener("animationstart", event =>{
    if(event.animationName === "formHide"){
        document.querySelector("body").style.overflow = "hidden";

    }
});

form.addEventListener("animationend", event => {
    if(event.animationName === "formHide"){
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});

// quadrados animados
const ulQuadrados = document.querySelector("ul.quadrados");
for (let i = 0; i<50; i++){
    const li = document.createElement("li");
 /*   const size = Math.floor(Math.random() * (100 - 10) + 10);
    const position = Math.random() * (99 - 1) + 1;
 */
    const random = (min, max) => Math.random() * (max - min) + min;
    const size = random(10,120);
    const position = random(1,99);
    const delay = random(5, 0.2);
    const tempo = random(1,5);
    const radioss = random(1,50);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.borderRadius = `${radioss}%`;
    
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${tempo}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulQuadrados.appendChild(li);

}



