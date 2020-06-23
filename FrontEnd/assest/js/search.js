let USER = "";

window.onload = function () {
    let ques = getQueryVariable("q");
    let id = getQueryVariable("id");

    USER = id;

    if (USER=="false"){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }

    search(ques);


};

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

function search(ques) {
    if (ques==false) {
        $.ajax({
            type:'get',
            async:'false',
            url: "http://60.205.224.10:8000/findAll/sort",
            crossDomain:'true',
            success: function (data) {
                if (data.status != 500){
                    putAns(data.data.slice(0, 6));
                }

            }
        });
    }
    let anslist = new Array();

    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/findAll/position/" + ques,
        crossDomain:'true',
        success: function (data) {
            if (data.status != 500){
                putAns(data.data);
            }

        }
    });

    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/findAll/comName/" + ques,
        crossDomain:'true',
        success: function (data) {
            if (data.status != 500){
                putAns(data.data);
            }

        }
    });

    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/findAll/tag/" + ques,
        crossDomain:'true',
        success: function (data) {
            if (data.status != 500){
                putAns(data.data);
            }

        }
    });

    if(document.getElementsByClassName("main-listing")[0].innerHTML == ''){
        putNoAns();
    }
}

function putAns(list) {
    let i=0;
    for (i;i<list.length;i++){
        console.log(list[i]);
        let now = list[i].entity;
        let html = "<article class=\" type-post  format-standard hentry clearfix\"><header class=\"clearfix\">" +
            "<h3 class=\"post-title\"><a href=\"work.html?id=" + USER + "&appid=" + now.applicationId +
            "\">" + now.comName + "<br>"+ now.position +"</a> </h3><div class=\"post-meta clearfix\"></div></header> " +
            "<p>"+ now.positiondesc + "<a class=\"readmore-link\" href=\"work.html?id=\"" + USER
            + "appid=" + now.applicationId + "\">&nbsp&nbsp&nbspRead more</a></p></article>";


        document.getElementsByClassName("main-listing")[0].innerHTML += html;
    }
}

function putNoAns() {
        let html = "<article class=\" type-post  format-standard hentry clearfix\">" +
            "<p>"+ "没有找到相应的工作" + "</p></article>";


        document.getElementsByClassName("main-listing")[0].innerHTML += html;

}
