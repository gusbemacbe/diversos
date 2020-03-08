# Diversos
> Neste repositório irei colocar projetos de diversos tipos, contribua você também editando e melhorando os códigos.

## Tela de Login animada

> Tela de *Login* contendo algumas animações usando `animate` do CSS e JavaScript.
![Screenshot](loginAnimado.bmp)

1. Quando a página carregar o formulário vai aparecer vindo do fundo, para alterar o comportamento desta animação altere o trecho de código do `keyframes fade`.
   
   ```
   @keyframes fade{
    from{
        opacity: 0;
        transform: scale(0.1);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
    }
   ```
2. Os elementos do formulário `div input-block` aparecem da esquerda para a direita, para alterar as animações deste bloco altere as propriedades do `animate` e do `@keyframes inputs`.
   ```
   form .input-block:nth-child(1){
    animation-name: inputs;
    animation-duration: 500ms;
    }
    form .input-block:nth-child(2){
        animation-name: inputs;
        animation-duration: 700ms;
        animation-delay: 100ms;
    }
    form .btn-login{
        animation-name: inputs;
        animation-duration: 1s;
        animation-delay: 170ms;
    }
    form .input-block, form .btn-login{
        animation-fill-mode: backwards;
    }
   ```
   ```
   @keyframes inputs{
    from{
        opacity: 0;
        transform: translate(-30%, -50%);
    }
    to{
        opacity: 1;
        transform: translate(0,0);
    }
    }
   ```
     * Para mudar o tempo de duração destas animações basta alterar a propriedade `animation-duration`
3. Ao clicar em *logar* o verifica se os campos estão devidamente preenchidos, para alterar essas funções basta abrir o arquivo *js/script.js*. 

* Ao clicar em *login* com os campos em branco o formulário vai tremer

```
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

```

4. Após as verificações o formulário desce até sumir da tela.

```
.form-hide{
    animation-name: formHide;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards ;
}
@keyframes formHide{
    0%{
        opacity: 0;
        transform: translateY(0);

    }
    90%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
        transform: translateY(100vh);
    }
}

```
   * Algumas formas ficam passando pela tela em diversas direções
   
   ## Qualquer contribuição é bem-vinda.

  >Quero deixar aqui meus agradecimentos ao trabalho do Mayk Brito e Gustavo Costa, valeu.
