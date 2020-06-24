

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

  /*判断comSignUpForm中是否有必要信息没有填入
  function validateForm(){
    var name = document.getElementById("comName").value;
    var password = document.getElementById("comPassword").value;
    var passwordAgain = document.getElementById("comPasswordAgain").value;
    var nature = document.getElementById("comNature").value;
    var logo = document.getElementById("logo").value;
    var setUpDate = document.getElementById("comSetUpDate").value;
    var email = document.getElementById("comEmail").value;
    var web = document.getElementById("comWeb").value;
    var legalPerson = document.getElementById("comLegalPerson").value;
    print("正在运行validateForm");
    if(name==""||name==null||password==""||password==null||passwordAgain==""||passwordAgain==null||nature==""||nature==null||logo==""||logo==null||setUpDate==""||setUpDate==null||email==""||email==null||web==""||web==null||legalPerson==""||legalPerson==null){
        alert("请完善注册信息");
        return false;
    }
    else{
        return true;
    }
  }
  */
  function getCode(){
    let email = document.getElementById("comEmail").value;
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
  function comRegister(){
    let comRegisterEmail = document.getElementById("comEmail").value;
    let comRegisterPassword = document.getElementById("comPassword").value;
    let code = document.getElementById("code").value;
    let comEnsurePassword = document.getElementById("comPasswordAgain").value;
    if(comEnsurePassword == comRegisterPassword){
        let aim_url = 'http://60.205.224.10:8000/Administrator/register/' + comRegisterEmail + "/" + code + "/" + comRegisterPassword;
        $.ajax({
            type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                window.alert(data.msg);
                window.location.href = "manSignIn.html";
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

