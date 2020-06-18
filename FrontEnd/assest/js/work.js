window.onload = function () {



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

}
