const username=document.querySelector('#username')
const password=document.querySelector('#password')
const form=document.querySelector('#login')
const email=document.querySelector('#email')

form.addEventListener('submit',(e)=>{
   
    if(!login()){
        e.preventDefault()
    }
    
})




function login(){
   
    const usernameVal=username.value.trim()
    const passwordVal=password.value.trim()
    const emailVal=email.value.trim()
    let sucess=true
   
    

    
    if(usernameVal===''){
        setError(username,'Username is required')
        sucess=false
    
    }
   
   
    else{
        setSucess(username)
    }
    
   

    if(emailVal===''){
        setError(email,'Email is required')
        sucess=false
    }

    else if(!validateEmail(emailVal)){
        setError(email,'Enter valid email')
        sucess=false
    }

    else{
        setSucess(email)
    }
    console.log(usernameVal);

    if(passwordVal===''){
        setError(password,'Password is required')
        sucess=false
    
    }

   
    else if(passwordVal.length!=5 ) {
        setError(password,'Enter valid Password with 5 character')
        sucess=false

    }

    else{
        setSucess(password)
        window.location.href = "https://12-bharani.github.io/insta-page/";
    }
    



    


}


const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
}




function setSucess(element){
    const input=element.parentElement;
    const errorElement=input.querySelector('.error')

    errorElement.innerText='';
    input.classList.add('sucess')
     input.classList.remove('error')


}
function setError(element,message){
    const input=element.parentElement;
    const errorElement=input.querySelector('.error')
   

   

    errorElement.innerText=message;
     input.classList.add('error')
     input.classList.remove('sucess')

}


