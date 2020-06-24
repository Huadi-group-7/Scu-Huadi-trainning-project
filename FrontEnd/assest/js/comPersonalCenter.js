let appIds = {};
let comId = "";
window.onload = function(){
    let id = getQueryVariable("id");
    comId = id;

    if (id=="false" || id==false){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }

    getComInfo();
    getApplicationList();
}
 function PreviewImage(imgFile) {
    var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.bmp$)|(\.*.svg$)/;
    if (!pattern.test(imgFile.value)) {
      alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！");
      imgFile.focus();
    } else {
      var path;
      if (document.all) {//IE
        imgFile.select();
        path = document.selection.createRange().text;
        document.getElementById("imgPreview").innerHTML = "";
        document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果
      } else {//FF
        path = URL.createObjectURL(imgFile.files[0]);
        document.getElementById("imgPreview").innerHTML = "<img src='"+path+"'/>";
      }
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
function toModifyPassword(){
    //window.alert("get into function");
    let id = getQueryVariable("id");
    window.alert(id);
    window.location.href = "comModifyPassword.html?id="+id;
}
function logout(){
    window.location.href = "comSignIn.html";
}

function getComInfo(){
    //let comId = getQueryVariable("id");
    if(comId == false){
        alert("请先登录！");
        window.location.href = "comSignIn.html";
    }
    let aim_url = 'http://60.205.224.10:8000/company/findcominformation/' + comId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                document.getElementById("comEmail").innerText = data.comemail;
                if(data.data.length > 0 ){
                    comInfo = data.data[0];
                    putInfo(comInfo);
                 }

            }
    })
}

function modifyInfo(){
    //alert(comId);
    let aim_url = 'http://60.205.224.10:8000/cpmpany/cominformation/' + comId;
    let new_comName = document.getElementById("comName").value;
    let new_nature = document.getElementById("comNature").value;
    let new_setUpDate = document.getElementById("comSetupDate").value;
    let new_introduction = document.getElementById("comIntroduction").value;
    let new_address = document.getElementById("comAddress").value;
    let new_web = document.getElementById("comWeb").value;
    let new_email = document.getElementById("resumeEmail").value;
    let data = {
            cominformation: [{
                     "companyName":new_comName,
                     "nature":new_nature,
                     "comTime":new_setUpDate,
                     "description":new_introduction,
                     "address":new_address,
                     "web":new_web,
                     "mailbox":new_email
                    }]

        };
        $.ajax({
        type:'post',
        async:'false',
        url: aim_url,
        crossDomain:'true',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            window.location.href = "comPersonalCenter.html?pc=1&id=" + comId;
        }

    });

}
function putInfo(comData) {
    document.getElementById("comName").value = comData.cominfoEntity.companyName;
    document.getElementById("comNature").value = comData.cominfoEntity.nature;
    document.getElementById("comSetupDate").value = comData.cominfoEntity.comTime;
    document.getElementById("comIntroduction").value = comData.cominfoEntity.description;
    document.getElementById("comAddress").value = comData.cominfoEntity.address;
    document.getElementById("comWeb").value = comData.cominfoEntity.web;
    document.getElementById("resumeEmail").value = comData.cominfoEntity.mailbox;
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

function getApplicationList(){
    if(comId == false){
        alert("请先登录！");
        window.location.href = "comSignIn.html";
    }
    let aim_url = "http://60.205.224.10:8000/findAll/appOfcom/sort/" + comId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                comApplication = data.data;
                document.getElementById("Released").innerText = comApplication.length;
                putApplicationInfo(comApplication);

            }
        })

}

function putApplicationInfo(ca){
    document.getElementById("applicationList").innerHTML = "";
    if(ca.length > 0){
        for(let i = 0; i < ca.length; i++){
            document.getElementById("applicationList").innerHTML += "<hr><div class=\"support-widget\" id=\""+ i + "\" name=\"releasedWanted\" style=\"width:35%;\" onclick=\"toComCheckList(" + i + ")\"><span><font size=\"3\">招聘名称：<span id=\"wantedName"+ i +"\"></span></font></span><br><span>职位数量：<span id=\"posNum"+ i +"\" ></span></span><br><span>标签：<span id=\"comTag"+ i +"\"></span></span><br><span>公司：<span id=\"com"+ i +"\"></span></span></div>"
            document.getElementById("wantedName"+i).innerText = ca[i].entity.position;
            document.getElementById("posNum"+i).innerText = ca[i].entity.num;
            document.getElementById("comTag"+i).innerText = ca[i].entity.tag;
            document.getElementById("com"+i).innerText = ca[i].entity.comName;
            appIds[i] = ca[i].entity.applicationId;
        }
    }
}
function toComCheckList(i){
    let appId = appIds[i];
    window.location.href= "comCheckList.html?id=" + comId + "&appId=" + appId;
}
function toNewWanted(){
    window.location.href = "newWanted.html?id="+ comId;
}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}
