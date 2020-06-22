//chartLine01
    var myChart = echarts.init(document.getElementById('chartLine01'));
    var option = {
    title: {
        text: '薪资情况',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        label:{
        	width:100,
        	height:20
        }
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
    	y: 'bottom',
        x: 'center',
        data:['软件开发','金融','会计','高校老师']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['北京','上海','深圳','成都']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} k'
        }
    },
    series: [
        {
            name:'软件开发',
            type:'line',
            data:[46, 24, 32, 23],
//          center: ['20%', '15%'],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            
        },
        {
            name:'金融',
            type:'line',
            data:[35, 26, 23, 12],
            
            
        },
        {
            name:'会计',
            type:'line',
            data:[44, 23, 11, 22],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            
        },
        {
            name:'高校老师',
            type:'line',
            data:[40, 25, 12, 49],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            
        },
    ]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chartLine01").width());
    var divheight=parseInt($("#chartLine01").height());
    divheight=divwidth/1.16;
    $("#chartLine01").height(divheight);
    myChart.resize();
});

//chart01
   var myChart1 = echarts.init(document.getElementById('chart01'));
   option1 = {
    title : {
        text: '求职情况',
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
    	y: 'bottom',
        x: 'center',
        data:['成都','上海']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'反馈案件',
            type:'bar',
            data:[4.3,2.5,3.5,4.5,5,4,9,10,3,6,4,7],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            
        },
        {
            name:'接受案件',
            type:'bar',
            data:[2.4,4.4,1.8,2.8,9,6,4,7,3,5,6,9],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            
        }
    ]
};
    myChart1.setOption(option1);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart01").width());
    var divheight=parseInt($("#chart01").height());
    divheight=divwidth/1.16;
    $("#chart01").height(divheight);
    myChart1.resize();
});
//chart02
   var myChart2 = echarts.init(document.getElementById('chart02'));
   option2 = {
    title: {
        text: '成都市不同季度岗位数量变化',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
    	y: 'bottom',
        x: 'center',
        data: ['软件开发', '金融','教师']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['第一季度','第二季度','第三季度','第四季度']
    },
    series: [
        {
              name:'软件开发',
            type:'bar',
            data:[4.3,2.5,3.5,4.5],
        },
        {
            name:'金融',
            type:'bar',
            data:[2.4,4.4,1.8,2.8],
        },
        {
            name:'教师',
            type:'bar',
            data:[2,2,3,5],
        }
    ]
};

    myChart2.setOption(option2);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart02").width());
    var divheight=parseInt($("#chart02").height());
    divheight=divwidth/1.16;
    $("#chart02").height(divheight);
    myChart2.resize();
});
//chart03
   var myChart3 = echarts.init(document.getElementById('chart03'));
   option3 = {
    title : {
        text: '成都市各行业岗位占比',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
        orient: 'vertical',
        left: 'right',
        bottom: '10',
        data: ['软件开发','金融','会计','教师']
    },
    series : [
        {
            name: '比例情况',
            type: 'pie',
            radius : '78%',
            center: ['50%', '55%'],
            data:[
                {value:8.2, name:'软件开发'},
                {value:3.2, name:'金融'},
                {value:1.4, name:'会计'},
                {value:1.2, name:'教师'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

    myChart3.setOption(option3);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart03").width());
    var divheight=parseInt($("#chart03").height());
    divheight=divwidth/1.16;
    $("#chart03").height(divheight);
    myChart3.resize();
});
//chart03
   var myChart4 = echarts.init(document.getElementById('chart04'));
   option4 = {
    title : {
        text: '成都市企业占比情况',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
        orient: 'vertical',
        left: 'right',
        bottom: '10',
        data: ['超大型企业','大型企业','小型企业','微型企业']
    },
    series : [
        {
            name: '占比情况',
            type: 'pie',
            radius : '78%',
            color: ['#a5a5a5', '#ed7d31', '#5b9bd5', '#ffc000'],
            center: ['50%', '55%'],
            data:[
                {value:3.2, name:'超大型企业'},
                {value:6.2, name:'大型企业'},
                {value:12.4, name:'小型企业'},
                {value:7.2, name:'微型企业'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                }
            }
        }
    ]
};

    myChart4.setOption(option4);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart04").width());
    var divheight=parseInt($("#chart04").height());
    divheight=divwidth/1.16;
    $("#chart04").height(divheight);
    myChart4.resize();
});
//chart05
   var myChart5 = echarts.init(document.getElementById('chart05'));
   option5 = {
    title: {
        text: '北京市不同季度岗位数量变化',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
    	y: 'bottom',
        x: 'center',
        data: ['金融业', '互联网行业','会计']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['第一季度','第二季度','第三季度','第四季度']
    },
    series: [
        {
              name:'金融',
            type:'bar',
            data:[4.3,2.5,3.5,4.5],
        },
        {
            name:'服务业',
            type:'bar',
            data:[2.4,4.4,1.8,2.8],
        },
        {
            name:'互联网',
            type:'bar',
            data:[2,2,3,5],
        }
    ]
};

    myChart5.setOption(option5);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart05").width());
    var divheight=parseInt($("#chart05").height());
    divheight=divwidth/1.16;
    $("#chart05").height(divheight);
    myChart5.resize();
});
//chart06
   var myChart6 = echarts.init(document.getElementById('chart06'));
   option6 = {
    title : {
        text: '成都市不同地区薪资状况',
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
		left: '2%',
		right: '1%',
		bottom: '3%',
		containLabel: true
		},
    legend: {
    	y: 'bottom',
        x: 'center',
        data:'接受抄告总和'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['双流区','锦江区','青羊区','金牛区','武侯区','成华区','新都区','温江区','龙泉驿','青白江区','天府新区']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'薪资情况',
            type:'bar',
            data:[3.8,6,9,4.5,6.9,2,7.1,4.3,6.2,5.1,4.9],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            
        }
    ]
};
    myChart6.setOption(option6);

window.addEventListener("resize",function(){
    var divwidth=parseInt($("#chart06").width());
    var divheight=parseInt($("#chart06").height());
    divheight=divwidth/1.16;
    $("#chart06").height(divheight);
    myChart6.resize();
});



























