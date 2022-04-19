const input = document.querySelectorAll(".box");
let value =0;
let isTrue=true;


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
function createElement(){
    if(isTrue){
        let parent = document.getElementsByClassName('form')[0]
        let er = document.createElement("p");
        er.classList.add("input-error")
         er.textContent="Hello"
         parent.insertBefore(er,input[1])
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
    if(!form.firstName){
        input[0].classList.add("box-border-error")
        createElement()
        
    }
    if(!form.lastName){input[1].classList.add("box-border-error")}
    if(!form.email){input[2].classList.add("box-border-error")}
    if(!ValidateEmail(form.email)){input[2].classList.add("box-border-error")}
    if(!form.password){input[3].classList.add("box-border-error")}

    removeAllBorder();
})
document.addEventListener('click',e=>{
    if(e.target.closest(".box") ===null ){
        for(let i=0;i<4;i++){
            input[i].classList.remove('box-border-focus')
        }
        }
})
        // input[0].appendChild(do);