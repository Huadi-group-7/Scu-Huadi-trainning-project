let USER='';

window.onload = function () {
    let userId = getQueryVariable('id');

    USER = userId;

    if (USER=="false"){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }
}

function selectAllReceiver(checkBox){
    var arr = document.getElementsByName("receiver");
    for(var i =0; i< arr.length;i++){
        arr[i].checked=checkBox.checked;
    }
}