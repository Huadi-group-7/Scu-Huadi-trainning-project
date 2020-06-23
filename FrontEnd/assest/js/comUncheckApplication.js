let app_info = {};
let appID = '';
let USER = '';

window.onload = function () {


    let appId = getQueryVariable('appid');
    let userId = getQueryVariable('id');

    USER = userId;
    //userID = "aec8ef35a519c5cecb22";
    appID = appId;
    //appID = "de71555b47ac2bd7a331";

    if (USER=="false"){
        document.getElementById("title-signin").style.display = "initial";
        document.getElementById("title-signon").style.display = "initial";
    }
    else{
        document.getElementById("title-mine").style.display = "initial";
    }

    let aim_url =  'http://60.205.224.10:8000/informatio/application/' + appID;

    $.ajax({
        type:'get',
        async:'false',
        url: aim_url,
        crossDomain:'true',

        success: function (data) {
            console.log(data);

            if (data.data.length<=0){
                alert("没有该招聘");
                window.location.href = "index-2.html"
            }
            else{
                app_info = data.data[0];
                putInfo(data.data[0]);
            }

        }

    });

    var chart_1 = Highcharts.chart('line-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: '近七天'
        },
        subtitle: {
            text: '数据来源: 智慧就业大数据分析平台'
        },
        xAxis: {
            categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
        },
        yAxis: {
            title: {
                text: '热度'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    // 开启数据标签
                    enabled: true
                },
                // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                enableMouseTracking: false
            }
        },
        series: [{
            name: '点击量',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2]
        }]
    });

    var chart_2 = Highcharts.chart('pie-chart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '1000-',
                y: 61.41,
            }, {
                name: '1000-3000',
                y: 11.84
            }, {
                name: '3000-7000',
                y: 10.85
            }, {
                name: '7000-12000',
                y: 4.67
            }, {
                name: '12000+',
                y: 4.18
            }]
        }]
    });

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

function putInfo(workdata) {
    document.getElementById("com_link").href = ""
    document.getElementById("com_name").innerText = workdata.comName;
    document.getElementById("com_desc").innerText = workdata.companydesc;
    document.getElementById("pos").innerText = workdata.position;
    document.getElementById("pos_desc").innerText = workdata.positiondesc;
    document.getElementById("req").innerText = workdata.requirement;
    document.getElementById("num").innerText = workdata.num;
    document.getElementById("money").innerText = workdata.money;
    document.getElementById("addr").innerText = workdata.address;
    document.getElementById("tag").innerText = "TAG:  " + workdata.tag;
    document.getElementById("updatetime").innerText = "上传时间：  " + workdata.uptime;
}

function sendMessage() {

    let n_e = document.getElementById("commentform").getElementsByTagName("input");
    user_name = n_e[0].value;
    email = n_e[1].value;
    let message = document.getElementById("comment").value;

    $.ajax({
        type:'get',
        async:'false',
        url: "http://60.205.224.10:8000/find/companyId/" + appID,
        crossDomain:'true',
        success: function (data) {
            console.log(data);

            if (data.data.length<=0){
                alert("error");
                window.location.href = "index-2.html"
            }
            else{
                let aim_url = "http://60.205.224.10:8000/comment/" + userID + "/" + data.data[0].companyId + "/" + appID + "/" + message;

                $.ajax({
                    type:'get',
                    async:'false',
                    url: aim_url,
                    crossDomain:'true',
                    success: function (data) {
                        alert("发送成功");
                    }
                });

            }

        }

    });
}

function ChangePage(e) {
    e.href = e.getAttribute("href") + "&id=" + USER
}
