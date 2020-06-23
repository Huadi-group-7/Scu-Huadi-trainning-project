let USER = "";
let user_info = {};

window.onload = function () {
    let pc = getQueryVariable("pc");
    let id = getQueryVariable("id");
    USER = id;
    //USER = 'aec8ef35a519c5cecb22';

    if (USER=="false" || USER==false){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }


    getStuInfo(USER);
    if (pc==false) pc=1;

    let ele = document.getElementById(pc);

    $(ele).siblings('dt').removeClass('current');
    $(ele).addClass('current').next('dd').slideDown(500).siblings('dd').slideUp(500);
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

function getStuInfo(ID) {
    if(ID==false || ID == "false"){
        alert("请先登录！");
        window.location.href = "index-2.html"
    }
    let aim_url =  'http://60.205.224.10:8000/findinformation/' + ID;
    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',
        
        success: function (data) {
            console.log(data);

            if (data.data.length<=0){
                alert("请先登录！");
                window.location.href = "index-2.html"
            }
            else{
                user_info = data.data[0];
                putInfo(data.data[0]);
                getMessage(USER);
            }
            
        }

    })

}

function getMessage() {
    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/user/findcomment/" + USER,
        crossDomain:'true',
        success: function (data) {
            console.log(data);

            if (data.data.length<=0){
                let html = "<blockquote><p>您还没有评论</p></blockquote>";
                document.getElementById("myComment").innerHTML += html;
            }
            else{
                let i=0;
                for(i;i<data.data.length;i++){
                    let cmsg = data.data[i];
                    let html = "<blockquote><a href='work.html?appid="+ cmsg.applicationId + "&id="+ USER + "' >"+ cmsg.content + "</a></blockquote>";
                    console.log(html)
                    document.getElementById("myComment").innerHTML += html;

                }
            }

        }

    })
}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}

function updateInfo(){
    let aim_url = 'http://60.205.224.10:8000/information/' + USER;

    let new_sex = document.getElementById("sex").value;
    let new_birth = document.getElementById("birth").value;
    let new_school = document.getElementById("school").value;
    let new_level = document.getElementById("level").value;
    let new_major = document.getElementById("major").value;
    let new_workplace = document.getElementById("workplace").value;
    let new_exp = document.getElementById("experience").value;

    console.log(user_info)

    let data = {information: [{
            'sex': new_sex,
            'birthdate': new_birth,
            'school': new_school,
            'education': new_level,
            'professional': new_major,
            'workaddress': new_workplace,
            'experience': new_exp,
            "realname": user_info.entity.realname,
            "graduatetime": user_info.entity.graduatetime,
            "work": user_info.entity.work
    }]};


    $.ajax({
        type:'post',
        async:'false',
        url: aim_url,
        crossDomain:'true',
        data: JSON.stringify(data),
        contentType: 'text/plain',
        success: function (data) {
            console.log(data);

            window.location.href = "person-page.html?id=" + USER + "pc=1"
        }

    });

    console.log(data);
}

function putInfo(userdata) {
    document.getElementById("stu_name").innerText = userdata.entity.realname;
    document.getElementById("sex").value = userdata.entity.sex;
    document.getElementById("birth").value = userdata.entity.birthdate;
    document.getElementById("school").value = userdata.entity.school;
    document.getElementById("level").value = userdata.entity.education;
    document.getElementById("major").value = userdata.entity.professional;
    document.getElementById("workplace").value = userdata.entity.workaddress;
    document.getElementById("experience").innerText = userdata.entity.experience;
}