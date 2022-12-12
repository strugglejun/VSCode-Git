window.addEventListener('load', function () {
    // 设置图标跟最屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 1.柱状图-就业岗位
    // 用立即执行函数 各个模块定义相同的变量名互不影响 不会污染
    (function () {
        // 1.初始化eCharts实例对象  eCharts.init(dom容器);
        myChart = echarts.init(document.querySelector('.bar .chart'));
        // 2.指定配置项和数据(option)
        var option = {
            color: ['#643cdd'],
            // 图表提示框组件
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // 修改图表大小
            grid: {
                left: '0',
                right: '1%',
                top: "10px",
                bottom: '3%',
                // 是否显示刻度标签
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' 网页设计', '前端开发', '网站重构', '前端架构', '移动端开发'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 修改刻度标签相关样式
                    axisLabel: {
                        color: '#531aff',
                        fontSize: 9
                    },
                    // 隐藏x轴的线
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    // 设置y轴线条样式
                    axisLine: {
                        lineStyle: {
                            color: '#643cdd'
                        }
                    },
                    // 设置y轴分割线
                    splitLine: {
                        lineStyle: {
                            color: '#531aff'
                        }
                    },
                    // 修改刻度标签相关样式
                    axisLabel: {
                        color: '#531aff',
                        fontSize: 9
                    },
                }
            ],
            series: [
                {
                    name: '岗位需求人数',
                    type: 'bar',
                    barWidth: '40%',
                    data: [2000, 3034, 3090, 3030, 2020],
                    // 设置柱子圆角
                    itemStyle: {
                        barBorderRadius: 4
                    }
                }
            ]
        };
        // 把配置给实例化对象
        myChart.setOption(option);
    })();



    // 2.折线图-人员变化
    (function () {
        myChart = echarts.init(document.querySelector('.line .chart'));
        var option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#531aff'
                    }
                }
            },
            legend: {
                data: ['网页设计', '前端开发', '网站重构', '前端架构', '移动端开发'],
                textStyle: {
                    color: '#770cb0'
                }
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016', '2017', '2018', '2019', '2020', '2021', '20']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '网页设计',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [540, 498, 758, 464, 586, 640, 750]
                },
                {
                    name: '前端开发',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [785, 654, 655, 985, 498, 578, 579]
                },
                {
                    name: '网站重构',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(55, 162, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: []
                },
                {
                    name: '前端架构',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 0, 135)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [645, 877, 952, 656, 666, 756, 725]
                },
                {
                    name: '移动端开发',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 191, 0)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(224, 62, 76)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [548, 569, 995, 245, 385, 469, 399]
                }
            ]
        };
        myChart.setOption(option);
    })();




    // 3.饼形图-地区分布
    (function () {
        myChart = echarts.init(document.querySelector('.pie .chart'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : ({d}%)'
            },
            series: [
                {
                    name: '热门城市',
                    type: 'pie',
                    radius: [30, 90],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 27, name: '北京' },
                        { value: 28, name: '上海' },
                        { value: 24, name: '深圳' },
                        { value: 20, name: '南京' },
                        { value: 18, name: '江苏' },
                        { value: 22, name: '重庆' },
                        { value: 16, name: '郑州' },
                        { value: 26, name: '香港' },
                        { value: 20, name: '武汉' },
                        { value: 25, name: '厦门' }
                    ],
                    label: {
                        color: '#531aff',
                        fontStyle: 'oblique'
                    }
                }
            ]
        };
        myChart.setOption(option);
    })();




    // 4.柱状图-技能要求
    (function () {
        myChart = echarts.init(document.querySelector('.bar1 .chart'));
        var option = {
            dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [89.3, 89, 'HTML'],
                    [75.1, 75, 'CSS'],
                    [98.4, 98, 'JavaScript'],
                    [50.1, 50, 'Ajax'],
                    [60.7, 60, 'node.js'],
                    [51.1, 51, 'Angular'],
                    [35, 35, 'MySql'],
                    [86, 86, 'vue'],
                    [78, 78, 'react']
                ]
            },
            tooltip: {
                trigger: 'item',

            },
            // 图形上的文本标签

            grid: {
                containLabel: true,
                left: '3%',
                right: '4%',
                bottom: '18%',
                top: '0'
            },
            xAxis: { name: 'amount' },
            yAxis: {
                type: 'category',
                // 修改刻度标签相关样式
                axisLabel: {
                    color: '#531aff',
                    fontSize: 9
                },
            },
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 10,
                max: 100,
                text: ['High Score', 'Low Score'],
                continuous: {
                    textStyle: {
                        color: 'pink'
                    }
                },
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#770cb0', '#3a1174', '#b2068d']
                }
            },
            series: [
                {
                    name: '技能重要程度',
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: 'amount',
                        // Map the "product" column to Y axis
                        y: 'product'
                    },
                }
            ]
        };
        myChart.setOption(option);
    })();



    // 5.折线图-薪资变化
    var myChart = echarts.init(this.document.querySelector('.line1 .chart'));
    var option = {
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['网页设计', '前端开发', '网站重构', '前端架构', '移动端开发'] ,
            textStyle: {
                color: '#770cb0'
            }
        },
        
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                // 修改刻度标签相关样式
                axisLabel: {
                    color: '#531aff',
                    fontSize: 11
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签相关样式
                axisLabel: {
                    color: '#531aff',
                    fontSize: 10
                },
            }
        ],
        series: [
            {
                name: '网页设计',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [12000, 13200, 10100, 13400, 19000, 18000, 21000]
            },
            {
                name: '前端开发',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [22000, 18200, 19100, 23400, 29000, 33000, 31000]
            },
            {
                name: '网站重构',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [15000, 23200, 20100, 15400, 19000, 33000, 41000]
            },
            {
                name: '前端架构',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [32000, 33200, 30100, 33400, 39000, 33000, 32000]
            },
            {
                name: '移动端开发',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [18200, 19302, 19901, 20934, 21290, 21330, 21320]
            }
        ]
    };
    myChart.setOption(option);






    // 6.年龄分布
(function(){
    myChart = echarts.init(document.querySelector('.pie1 .chart'));
    option = {
        // backgroundColor: '#6328e2',
        title: {
        //   text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : ({d}%)'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '年龄',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '30~40岁' },
              { value: 310, name: '40~50岁' },
              { value: 274, name: '50~60岁' },
              { value: 400, name: '20~30岁' }
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 20,
              length2: 10
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
       myChart.setOption(option);
 })();






//  7.地图定制
myChart = echarts.init(this.document.querySelector('.map .chart'));
 
})




