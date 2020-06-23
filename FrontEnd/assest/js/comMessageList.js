window.onload = function () {
    getComment();
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
function getComment(){
    let comId = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    let aim_url = 'http://60.205.224.10:8000/appilication/findcomment/' + appId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                if(data.data != undefined){
                    let commentList = data.data;
                     putCommentInfo(data.data);
                }
            }
    })
}
function putCommentInfo(ca){
    document.getElementById("commentList").innerHTML = "";
    if(ca.length > 0){
        for(let i = 0; i < ca.length; i++){
            document.getElementById("commentList").innerHTML += "<hr><div class=\"support-widget\" id=\""+ i + "\" name=\"commentList\" style=\"width:35%;\" onclick=\"toComCheckList(" + i + ")\"><span>评论：<span id=\"comment"+ i +"\"></span></span><br><span><font size=\"1\"><span id=\"commentTime"+ i +"\" ></span></font></span><br></div>"
            document.getElementById("comment").innerText = ca[i].content;
            document.getElementById("commentTime").innerText = ca[i].commentTime;

        }
    }
}

