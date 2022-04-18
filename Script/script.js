const input = document.querySelectorAll(".box");

let value =0;
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
    remvoeBorderOutline(input);

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
    
    input.forEach(item=>{
        item.childNodes[0].value='';
    })
    removeAllBorder();
})
document.addEventListener('click',e=>{
    if(e.target.closest(".box") ===null ){
        for(let i=0;i<4;i++){
            input[i].classList.remove('box-border-focus')
        }
        }
})
