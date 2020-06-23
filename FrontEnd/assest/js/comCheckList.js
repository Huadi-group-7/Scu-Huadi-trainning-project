let resumeIds = {};
window.onload = function () {
    getUncheckedResume();
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
function getUncheckedResume(){
    let comId = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    //window.alert(appId);
    let aim_url = "http://60.205.224.10:8000/findAll/receiveresume/" + comId + "/" + appId;
     $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                //document.getElementById("comEmail").innerText = data.comemail;
                putApplicationInfo(data.data[0]);

            }
    })
}
function putApplicationInfo(ca){
    document.getElementById("applicationList").innerHTML = "";
    if(ca.length > 0){
        for(let i = 0; i < ca.length; i++){
            document.getElementById("applicationList").innerHTML += "<hr><div class=\"support-widget\" id=\""+ i + "\" name=\"unCheckedResume\" style=\"width:40%;\" onclick=\"toCheck(" + i + ")\"><span><font size=\"3\">真实姓名：<span id=\"realName"+ i +"\"></span></font></span><br><span>毕业学校：<span id=\"graduateSchool"+ i +"\" ></span></span><br><span>专业：<span id=\"major"+ i +"\"></span></span><br><span>学历：<span id=\"education"+ i +"\"></span></span></div>"
            document.getElementById("realName"+i).innerText = ca[i].entity.;
            document.getElementById("graduateSchool"+i).innerText = ca[i].entity.;
            document.getElementById("major"+i).innerText = ca[i].entity.;
            document.getElementById("education"+i).innerText = ca[i].entity.;
            resumeIds[i] = ca[i].entity.applicationId;
        }
    }
}
function toCheck(i){

}
