
window.onload = function search() {
    let anslist = new Array();

    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/findAll/user/information",
        crossDomain:'true',
        success: function (data) {
            if (data.status != 500){
				console.log(data);
                putAns(data.data);
            }

        }
    });


    if(document.getElementsByClassName("main-listing2")[0].innerHTML == ''){
        putNoAns();
    }
}

function putAns(list) {
    let i=0;
    for (i;i<list.length;i++){
        console.log(list[i]);
        let now = list[i].entity;
       
		let html="<h4>"+now.professional+"&nbsp&nbsp&nbsp"+ now.school+"</h4>"+"<p>"+now.work+"&nbsp&nbsp&nbsp"+now.workaddress+"</p>";
        
                                                                


        document.getElementsByClassName("main-listing2")[0].innerHTML += html;
    }
}



function putNoAns() {
        let html = "<article class=\" type-post  format-standard hentry clearfix\">" +
            "<p>"+ "没有找到相应的工作" + "</p></article>";


        document.getElementsByClassName("main-listing2")[0].innerHTML += html;

}
