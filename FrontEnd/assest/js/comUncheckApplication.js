window.onload = function () {

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

function downloadResume(){
    let rid = getQueryVariable("resumeId");
    let aim_url = 'http://60.205.224.10:8000/look/sendresume/' + rid;
    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',

        success: function (data) {
            console.log(data)
            if(data.data != undefined){
                let downloadUrl = data.data[0].url;
                console.log(downloadUrl)
                $.ajax({
                    crossDomain: true,
                    url: downloadUrl
                });
            }
            else{
                alert("data is undefined.");
            }
        }
    })
}
function passCheck(){
    let comId = getQueryVariable("id");
    let rid = getQueryVariable("resumeId");
    let appId = getQueryVariable("appId");
    let aim_url = 'http://60.205.224.10:8000/company/resumeYes/' + comId + "/" + rid;
    $.ajax({
            type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                window.location.href = "comCheckList.html?id=" + comId + "&appId=" + appId;
            }
    })
}
function notPassCheck(){
    let id = getQueryVariable("id");
    let appId = getQueryVariable("appId");
    window.location.href = "comCheckList.html?id=" + id + "&appId=" + appId;
}
