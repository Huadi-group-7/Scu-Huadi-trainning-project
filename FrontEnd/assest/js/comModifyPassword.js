let companyId = getQueryVariable("id");
window.onload = function () {
    getComInfo();
}
window.onload = function () {
    let userId = getQueryVariable('id');

    USER = userId;

    if (USER=="false"){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
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

  //判断两次密码是否一致
  function checkPassword(){
  var notice = "两次密码输入不一致";
  if(document.getElementById("comPassword").value != document.getElementById("comPasswordAgain").value){
    document.getElementById("checkPassword").innerHTML = notice;
  }
  else{
    document.getElementById("checkPassword").innerHTML = "";
  }

  }
  function getComInfo(){
    //let comId = getQueryVariable("id");
    if(companyId == false){
        alert("请先登录！");
        window.location.href = "comSignIn.html";
    }
    let aim_url = 'http://60.205.224.10:8000/company/findcominformation/' + companyId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
               // console.log(data);
                document.getElementById("email").innerText = data.comemail;

            }
    })
}
  function getCode(){
    let email = document.getElementById("email").innerText;
    let aim_url = 'http://60.205.224.10:8000/gain/code/' + email;
    $.ajax({
            type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                //window.alert(data.msg);
            }
        })

  }
  function submitPassword(){

    let companyEmail = document.getElementById("email").value;
    let comNewPassword = document.getElementById("password").value;
    let comNewPasswordAgain = document.getElementById("ensurePassword").value;
    let code = document.getElementById("code").value;
    let aim_url = 'http://60.205.224.10:8000/company/changePassword/' + companyId + "/" + companyEmail + "/" + comNewPassword + "/" + code;
    if(comNewPassword == comNewPasswordAgain){
        $.ajax({
                type:'get',
                async:'false',
                url: aim_url,
                crossDomain:'true',

                success: function (data) {
                    console.log(data);
                    window.alert(data);

                    window.location.href = "comPersonalCenter.html?id=" + companyId;



                }
            })
        }
  }

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}
