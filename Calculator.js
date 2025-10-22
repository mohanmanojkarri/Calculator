const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");


buttons.forEach ((button) =>{
    button.addEventListener("click",()=>{
        event.preventDefault(); 
        if(button.name === "="){
            output.value = eval(input.value);
        }
        else if(button.name === "AC"){
            input.value = "";
            output.value = "";
        }
        else if(button.name === "D"){
            input.value = input.value.slice(0,-1) ;
        }
        else{
            input.value = input.value + button.name;
        }
    });
});