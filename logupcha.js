//sign up js
var arr=[];

function signup(){
var name=document.getElementById("username2").value;
var passs=document.getElementById("password2").value;
var conpass=document.getElementById("conpassword").value;
var ag=document.getElementById("age").value;
var phone=document.getElementById("phone").value;
var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var charr=/^(?=.*[a-z])$/
var ingg=/^(?=.*\d)$/

    if(name==""||passs==""||conpass==""||ag==""||phone=="")
    {
        alert('you must full data')
    }else if(!passs==conpass){
        alert('password not match with conpass')
    }else if(phone.length<11||phone.length>11)
    {
      alert ('phone must be 11 number')
    }else if (ag<18||ag>60){
        alert('you cant sign up must be between 18 and 60')
   }else if(!passwordPattern.test(passs)||passs.length>8){
    alert('pass not stronge')
   }
   else{
        var input={
            name,passs
        }
        arr.push(input);
        console.log(arr);

        alert('sign up scssis')
    }
}


//login js
function signin(){    
    var user=document.getElementById("username1").value;
    var pass=document.getElementById("password1").value;
    if(user==""||pass==""){
        alert('must full data')
    }else{
        for(let i=0;i<=arr.length;i++){
            if(arr[i].name==user&&arr[i].passs==pass){
                alert('you sign in')

                window.location.href="reviewshahd.html"
                return
            }else {
                alert ('you cant sign in')
                return
            }
        }
    }
}



//update pass js

function upda(){
    var userm=document.getElementById("username3").value;
    var newpass=document.getElementById("newpassword").value;
    var user=["shahd123","ashraf123"];
    
        if(userm==""||newpass==""){
        alert('must full data')
        }else {
            for(let i=0;i<=user.length;i++){
               if(arr[i].name==userm){
                newpass== arr[i].passs
                alert('change password')
                var input={
                    newpass,userm
                }
                arr.push(input)
                console.log(arr)
                return
               }else{
                alert('you cant change password')
               }
            }
        }
    
 }
    
 
    
    

