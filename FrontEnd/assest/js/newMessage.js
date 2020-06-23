let USER='';

window.onload = function () {
    let userId = getQueryVariable('id');

    USER = userId;

    if (USER=="false" || USER==false){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }
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

function selectAllReceiver(checkBox){
    var arr = document.getElementsByName("receiver");
    for(var i =0; i< arr.length;i++){
        arr[i].checked=checkBox.checked;
    }
}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}

