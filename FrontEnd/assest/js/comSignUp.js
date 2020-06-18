 function PreviewImage(imgFile) {
    var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.bmp$)|(\.*.svg$)/;
    if (!pattern.test(imgFile.value)) {
      alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！");
      imgFile.focus();
    } else {
      var path;
      if (document.all) {//IE
        imgFile.select();
        path = document.selection.createRange().text;
        document.getElementById("imgPreview").innerHTML = "";
        document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果
      } else {//FF
        path = URL.createObjectURL(imgFile.files[0]);
        document.getElementById("textfield").value = path;
        document.getElementById("imgPreview").innerHTML = "<img src='"+path+"'/>";
      }
    }
  }