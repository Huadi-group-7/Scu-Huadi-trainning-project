function selectAllReceiver(checkBox){
    var arr = document.getElementsByName("receiver");
    for(var i =0; i< arr.length;i++){
        arr[i].checked=checkBox.checked;
    }
}