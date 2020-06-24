let USER = "";
window.onload = function(){
    let id = getQueryVariable("id");
    USER = id;

    if (id=="false" || id==false){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }

    getInfo();
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

function getInfo(){
    //let comId = getQueryVariable("id");
    if(USER == false || USER == 'false'){
        alert("请先登录！");
        window.location.href = "manSignIn.html";
    }
    let aim_url = 'http://60.205.224.10:8000/findAll/user/information';
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                comInfo = data.data;
                putInfo(comInfo, "allstu");


            }
    })
    aim_url = 'http://60.205.224.10:8000/company/findAllcominformation';
    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',

        success: function (data) {
            console.log(data);
            comInfo = data.data;
            putInfo(comInfo, "allcom");


        }
    })
    aim_url = 'http://60.205.224.10:8000/findAll/sort';
    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',

        success: function (data) {
            console.log(data);
            comInfo = data.data;
            putInfo(comInfo,allres);

        }
    })
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

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}

function putInfo(data, id) {
    var father = document.getElementById(id);

    for (i=0;i<data.length;i++){
        let html = "";
        switch (id) {
            case "allstu":
                html = "<p class='success'><a href='persona-page.html?id=" + data[i].entity.userId + "'>"+data[i].entity.realname+"</a><button >删除<button></p>";
                break;
            case "allcom":
                html = "<p class='success'><a href='comPersonalCenter.html?id=" + data[i].cominfoEntity.companyId + "'>"+data[i].cominfoEntity.companyName+"</a><button >删除<button></p>";
                break;
            case "allres":
            html = "<p class='success'><a href='work.html?id=" + data[i].entity.applicationId + "'>"+data[i].entity.comName+ data[i].entity.position +"</a><button >删除<button></p>";
            break;
        }


        father.innerHTML += html;
    }



}
