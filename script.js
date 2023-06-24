///to start for the validation form
console.log("hello words");

function validation() {
    
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
 
    var pass = document.getElementById('pass').value;
 
    var conpass = document.getElementById('conpass').value;
 
 


    if(user .value ===' ' || email. value === '' || pass.value === ' ' || conpass.value === '')
    {
        denger.style.display = 'block';
    }
    else{
        setTimeout(() =>{
            user.value = '';
            email.value = '';
            pass.value = '';
            conpass.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() =>{
      denger.style.display = 'none';
      success.style.display = 'none';
    }, 4000);
}


    
     
     setTimeout(()=>{
        denger.style.display = 'none';
        success.style.display = 'none';
 }, 4000);

}



