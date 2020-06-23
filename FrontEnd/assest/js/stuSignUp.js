  function checkPassword(){
  var notice = "两次密码输入不一致";
  if(document.getElementById("stuPassword").value != document.getElementById("stuPasswordAgain").value){
    document.getElementById("checkPassword").innerHTML = notice;
  }
  else{
    document.getElementById("checkPassword").innerHTML = "";
  }
  }

 function getQueryVariable(variable)
 {
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
         var pair = vars[i].split("=");
         if(pair[0] == variable){return pair[1];}
     }
     return(false);
 }
 function stuSignUp(){
    let stuRegisterEmail = document.getElementById("stuEmail").value;
    let stuRegisterPassword = document.getElementById("stuPassword").value;
    let code = document.getElementById("code").value;
    let stuEnsurePassword = document.getElementById("stuPasswordAgain").value;
    if(stuEnsurePassword == stuRegisterPassword){
        let aim_url = 'http://60.205.224.10:8000/user/register/' + stuRegisterEmail + "/" + code + "/" + stuRegisterPassword;
        $.ajax({
            type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                window.alert(data.msg);
                window.location.href = "stuSignIn.html";
            }
        })
        }
        else{
            window.alert("请确认密码！");
        }
 }

 function ChangePage(e) {
     e.href = e.getAttribute("href") + "&id=" + USER
 }

