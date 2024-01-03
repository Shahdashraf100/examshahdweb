
function upda(){

var userm=document.getElementById("username").value;
var newpass=document.getElementById("newpassword").value;
var user=["shahd123","ashraf123"];
var pas=[];
    if(userm==""||newpass==""){
    alert('must full data')
    }else {
        for(let i=0;i<=user.length;i++){
           if(user[i]==userm){
            newpass==pas[i];
            alert('change password')
            return
           }else{
            alert('you cant change password')
           }
        }
    }

}






