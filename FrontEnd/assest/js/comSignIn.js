let comInfo = {};
window.onload = function () {
    let email = getQueryVariable(variable);
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

function comLogin(companyEmail, comPassword){
    let aim_url = 'http://60.205.224.10:8000/company/login' + companyEmail + comPassword;

    let companyEmail = document.getElementById("comEmail").value;
    let comPassword = document.getElementById("comPassword").value;

    let data = {information:[{
            'companyEmail':companyEmail,
            'comPassword':comPassword
    }]};

    $ajax({
        type:'post',
        async:'false',
        url: aim_url,
        crossDomain:'true',
        data: JSON.stringify(data),
        contentType: 'text/plain',
        success: function (data) {
            console.log(data);

            window.location.href = "comPersonalCenter.html?"+ ;
        }
    })
}
