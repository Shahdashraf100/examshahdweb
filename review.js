var yes=0;
var no=0
var radios=document.querySelectorAll(".qqq1");
function ans()
{

radios.forEach( function(r){
    if(r.checked&&r.value=="yes"){
        yes++
        return
       

    }else if(r.checked&&r.value=="no")
    {
      return
    }
    
});
alert(`thanks for you  yessss=${yes}` )
window.location.href="homeshahd.html"

}
