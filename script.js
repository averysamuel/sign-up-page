

let pass = document.querySelector("#user_password");
let conf = document.querySelector("#confirm_password");
const btn = document.querySelector('#submit');
let password; 
let pass2;

pass.addEventListener('input',()=>{
password = pass.value;
console.log(password)

    if(password===conf){
        pass.style.backgroundColor = "rgba(32,178,170,0.4)"
        conf.style.backgroundColor = "rgba(32,178,170,0.4)"
    } else {
        conf.style.backgroundColor = "rgba(255,69,0,0.3)"
    }
});

conf.addEventListener('input',()=>{
pass2 = conf.value;
console.log(pass2);
    
        if(password===pass2){
            pass.style.backgroundColor = "rgba(32,178,170,0.4)"
            conf.style.backgroundColor = "rgba(32,178,170,0.4)"
        } else  {
            conf.style.backgroundColor = "rgba(255,69,0,0.3)"
        }
    });