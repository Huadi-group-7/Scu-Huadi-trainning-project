window.onload = function () {
    let pc = getQueryVariable("pc");

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
