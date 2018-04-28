function saygoodby(){
     document.write("good bay ")
}

function writecooki(){
    //alert("hi cookies")
    var allcookies=document.cookie;
    //document.write("all cookeie:"+allcookies)
    cookearray=allcookies.split(';')
    for(var i=0 ;i<cookearray.length;i++){
      name=cookearray[i].split('=')[0];
      value=cookearray[i].split('=')[1];
      document.write(allcookies +"key is:"+name + 'value is:'+value)
    }
}

function getvalue(){
  var retval=prompt("enter your name:")
  document.write("get retval:"+retval)
}
function getvaluetext(){
   var gettext=document.myform.textuser.value;
   alert(gettext)
}