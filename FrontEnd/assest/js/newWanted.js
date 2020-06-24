let comName = "";
let comDes = "";
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

    fullInfoOrNot();
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
function fullInfoOrNot(){
    let comId = getQueryVariable("id");
    let aim_url = "http://60.205.224.10:8000/company/findcominformation/" + comId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                if(data.data.length > 0){
                    let comInfo = data.data[0];
                    if(comInfo.cominfoEntity.companyName==null||comInfo.cominfoEntity.companyName==""||comInfo.cominfoEntity.companyName==undefined){
                        window.location.alert("请完善信息");
                        window.location.href = "comPersonalCenter.html?id="+comId;
                    }
                    else{
                        getNameAndDes(comInfo);
                    }
                }
            }
        })
}
function getNameAndDes(comData){
    comName = comData.cominfoEntity.companyName;
    comDes = comData.cominfoEntity.description;
    document.getElementById("comName").innerText = comName;
    document.getElementById("comIntroduction").innerText = comDes;
}
function release(){
    let comId = getQueryVariable("id");
    let position = document.getElementById("wantedName").value;
    let positionNum = document.getElementById("wantedNum").value;
    let requirement = document.getElementById("posRe").value;
    let posDes= document.getElementById("posDes").value;
    let money= document.getElementById("posSalary").value;
    let address =document.getElementById("address").value;
    let tag =document.getElementById("tag").value;
    let aim_url = "http://60.205.224.10:8000/company/application/" + comName + "/" + comDes + "/" + position + "/" + posDes + "/" + requirement + "/" + positionNum + "/" + money+"/"+address+"/"+tag+"/"+comId;
    $.ajax({
        type:'get',
            async:'false',
            url: aim_url,
            crossDomain:'true',

            success: function (data) {
                console.log(data);
                window.location.href = "comPersonalCenter.html?id="+comId;
            }
        })


}
