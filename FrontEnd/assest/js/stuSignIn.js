//let comInfo = {};
//let id = "gfhjrtyu56i";
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

function comLogin(){
    let email = document.getElementById("stuEmail").value;
    let password = document.getElementById("stuPassword").value;

    let aim_url = 'http://60.205.224.10:8000/user/login/' + email + "/" + password;

    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',

        success: function (data) {
            console.log(data);
            user_id = data.user_id;
            alert("a");
            window.location.href = "person-page.html?id="+user_id;
        }
    })
}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}


