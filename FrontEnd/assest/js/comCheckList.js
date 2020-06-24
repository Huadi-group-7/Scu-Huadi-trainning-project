let uncheckResumeIds = {};
let checkResumeIds={};
window.onload = function () {
    let id = getQueryVariable("id");
    comId = id;

    if (id=="false" || id==false){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }

    getUncheckedResume();
    getCheckedResume();
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
                //console.log();
                if(data.data != undefined){
                    putUncheckInfo(data.data);
                }


            }
    })
}
function putUncheckInfo(ca){
    if(ca.length > 0){
        for(let i = 0; i < ca.length; i++){
            uncheckResumeIds[i] = ca[i].entity.resumeId;
            document.getElementById("uncheckedResume").innerHTML += "<hr><span id=\"uncheck" + i + "\"  onclick=\"toUnCheck("+ i + ")\">"+(i+1)+".点击查看进入审核("+uncheckResumeIds[i]+")</span>";
        }
    }
}
function toUnCheck(i){
    let rid = uncheckResumeIds[i];
    let id = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    window.location.href = "comUncheckApplication.html?id="+ id +"&resumeId=" + rid+"&appId="+appId;
}
function getCheckedResume(){
    let comId = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    //window.alert(appId);
    let aim_url = "http://60.205.224.10:8000/findAll/accessresume/" + comId + "/" + appId;
     $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                if(data.data != undefined){
                    putCheckInfo(data.data);
                }
            }
    })
}
function putCheckInfo(ca){
    if(ca.length > 0){
        for(let i = 0; i < ca.length; i++){
            checkResumeIds[i] = ca[i].entity.resumeId;
            document.getElementById("checkedResume").innerHTML += "<hr><span id=\"check" + i + "\"  onclick=\"toView("+ i + ")\">"+(i+1)+".点击进入审核页面可下载简历</span>";
        }
    }
}
function toCheck(i){
    let rid = uncheckResumeIds[i];
    let companyId = getQueryVariable("id");
    let applicationId = getQueryVariable("appId");
    let aim_url = 'http://60.205.224.10:8000/company/resumeAcees/' + companyId + "/"+ applicationId +"/"+rid;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                    console.log(data);
                    window.location.href = "comCheckApplication.html?id="+ companyId +"&appId=" + applicationId + "&resumeId=" + rid;
                    //window.location.href = downloadUrl;

            }
    })

}
function toView(i){
    let companyId = getQueryVariable("id");
    let applicationId = getQueryVariable("appId");
    let rid = checkResumeIds[i];
    window.location.href = "comCheckApplication.html?id="+ companyId +"&appId=" + applicationId + "&resumeId=" + rid;
}
function toComments(){
    let comId = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    window.location.href = "comMessageList.html?id="+id+"&appId="+appId;
}
function deleteWanted(i){
    let applicationId = getQueryVariable("appId");
    let aim_url = 'http://60.205.224.10:8000/delete/' + applicationId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                    console.log(data);
                    window.location.href = "comPersonalCenter.html?id="+ companyId;
                    //window.location.href = downloadUrl;

            }
    })

}
