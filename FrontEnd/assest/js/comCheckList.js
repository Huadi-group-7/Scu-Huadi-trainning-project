let uncheckResumeIds = {};
let checkResumeIds={};
window.onload = function () {
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
            document.getElementById("uncheckedResume").innerHTML += "<hr><span id=\"uncheck" + i + "\"  onclick=\"toUnCheck("+ i + ")\">"+(i+1)+".点击查看进入审核</span>";
        }
    }
}
function toUnCheck(i){
    let rid = uncheckResumeIds[i];
    window.location.href = "comUncheckApplication.html?resumeId=" + rid;
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
            document.getElementById("checkedResume").innerHTML += "<hr><span id=\"check" + i + "\"  onclick=\"toCheck("+ i + ")\">"+(i+1)+".点击进入审核页面可下载简历</span>";
        }
    }
}
function toCheck(){
    let rid = checkResumeIds[i];
    window.location.href = "comCheckApplication.html?resumeId=" + rid;
}


function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}