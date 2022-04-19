const input = document.querySelectorAll(".box");
let value =0;
let isTrue=true;
let isClick=true;
const button = document.getElementsByClassName("box-bg-green")[0]
let form ={
    firstName:'',
    lastName:'',
    email:'',
    password:''
    
}
function addBorderOutline(item){
    item.childNodes[0].focus();
    value = event.currentTarget.id;
    item.classList.add("box-border-focus");
    if(item.classList.contains('box-border-error')){
        removeErrorBorder();
    }
    remvoeBorderOutline(input);

}
function createElement(textContent, before,isErr){
    isTrue = isErr;
    if(isTrue){
        let parent = document.getElementsByClassName('form')[0]
        let icon = input[before-1];
        let errorIcon=document.createElement("img");
        errorIcon.setAttribute("src","images/icon-error.svg")
        errorIcon.classList.add("input-error-icon")
        icon.appendChild(errorIcon)
        let er = document.createElement("p");
        er.classList.add("input-error")
         er.textContent=textContent
         parent.insertBefore(er,input[before])
         isTrue= false;
    }
}
function isIdMatch(item){
    if(item.id!==value){
        return true;
    }
    return false;
}
function remvoeBorderOutline(list){
    for(let i=0;i<4;i++){
        if(isIdMatch(list[i])){
            list[i].classList.remove('box-border-focus');
        }
    }
}
function removeAllBorder(){
    for(let i=0;i<4;i++){
        input[i].classList.remove('box-border-focus')
    }
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
function removeErrorBorder(){
    isClick=true;
        let errorMsg = document.getElementsByClassName('input-error');
        let errorIcon = document.getElementsByClassName("input-error-icon");
        while(errorMsg.length!==0){
            errorMsg[0].remove()
            errorIcon[0].remove();
        }
    for(let i of input){
        i.classList.remove('box-border-error')
    }
}
input.forEach(item=>{
    if(!item.classList.contains("box-bg-green")){
        item.addEventListener("click",addBorderOutline.bind(this,item))
    }
})

button.addEventListener("click",e=>{
    input[0].childNodes[0].addEventListener("input",e=>{
        form.firstName=e.currentTarget.value;
    })
    input[1].childNodes[0].addEventListener("input",e=>{
        form.lastName=e.target.value;
    })
    input[2].childNodes[0].addEventListener("input",e=>{
        form.email=e.target.value;
    })
    input[3].childNodes[0].addEventListener("input",e=>{
        form.password=e.target.value;
    })

        
    if(isClick){
        if(!form.firstName){
            input[0].classList.add("box-border-error")
            createElement("First name cannot be empty",1,true)
        }
        if(!form.lastName){
            input[1].classList.add("box-border-error")
            createElement("Last Name cannot be empty",2,true)
        }
        if(!ValidateEmail(form.email)){
            input[2].classList.add("box-border-error")
            createElement("Email is Invalid",3,true)
        }
        if(!form.password){
            input[3].classList.add("box-border-error")
            createElement("Password cannot be empty",4,true)
    
    }
    isClick=false;

    }


    removeAllBorder();
})
document.addEventListener('click',e=>{
    if(e.target.closest(".box") ===null ){
        for(let i=0;i<4;i++){
            input[i].classList.remove('box-border-focus')
        }
        }
})