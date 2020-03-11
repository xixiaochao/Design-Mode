function check(){
    let form = document.querySelector('#userform');
    let inputs = form.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
        let validate = inputs[i].dataset.validate;
        let validateFn = window[validate];
        if(validateFn){
            let error = validateFn(inputs[i]);
            if(error){
                return alert(error);
            }
        }
    }
}

function checkUserName(input){
    
}
function checkEmail(input){
    let val = input.value;
    if(!val && val.indexOf('@') == -1){
        return '邮箱格式不合法';
    }
}
function checkPassword(){

}