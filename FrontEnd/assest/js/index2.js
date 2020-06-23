
window.onload =function search() {

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
 
    let anslist = new Array();

 

    if(document.getElementsByClassName("main-listing2")[0].innerHTML == ''){
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


        document.getElementsByClassName("main-listing2")[0].innerHTML += html;
    }
}

function putNoAns() {
        let html = "<article class=\" type-post  format-standard hentry clearfix\">" +
            "<p>"+ "没有找到相应的工作" + "</p></article>";


        document.getElementsByClassName("main-listing2")[0].innerHTML += html;

}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}