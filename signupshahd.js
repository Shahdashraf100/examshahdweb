

function signup(){
    var arr=[];
var name=document.getElementById("username").value;
var pass=document.getElementById("password").value;
var conpass=document.getElementById("conpassword").value;
var ag=document.getElementById("age").value;
var phone=document.getElementById("phone").value;
var regix=/^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*\d){8,}$/
    if(name==""||pass==""||conpass==""||ag==""||phone=="")
    {
        alert('you must full data')
    }else if(!pass==conpass){
        alert('password not match with conpass')
    }else if(phone.length<11||phone.length>11)
    {
      alert ('phone must be 11 number')
    }else if (ag<18||ag>60){
        alert('you cant sign up must be between 18 and 60')
   }else if(!pass.match(regix)||pass.length>8){
    alert('pass must be strong ')
   }
   else{
        var input={
            name,pass
        }
        arr.push(input);
        console.log(arr);

        alert('sign up scssis')
    }
}



