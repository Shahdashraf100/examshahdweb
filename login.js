
function signin(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var userssss=["shahd","ashraf"]
    var passssss=["123456","987654"]
    if(user==""||pass==""){
        alert('must full data')
    }else{
        for(let i=0;i<=userssss.length;i++){
            if(userssss[i]==user&&passssss[i]==pass){
                alert('you sign in')
                return
            }else {
                alert ('you cant sign in')
                return
            }
        }
    }
}