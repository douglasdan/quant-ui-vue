<template>
    <div id="sb-bar-chart2" style="width: 700px;">
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  var option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['申报销售收入', '销售税额', '进项税额']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['广东公司', '江苏公司', '浙江公司', '上海公司', '山东公司']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '申报销售收入',
            type: 'line',
            data: [25.6, 24.6, 23.6, 22.6, 21.6],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '销售税额',
            type: 'line',
            data: [25.6/2, 24.6/2, 23.6/2, 22.6/2, 21.6/2],
            markPoint: {
                data: [
                    {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                    {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '进项税额',
            type: 'line',
            data: [25.6/2.5, 24.6/2.5, 23.6/2.5, 22.6/2.5, 21.6/2.5],
            markPoint: {
                data: [
                    {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                    {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        
    ]
}

  export default {
    name: 'SbBar',
    data() {
        return {
            
        }
    },
    mounted() {
        var chartDom = document.getElementById('sb-bar-chart2');
        var myChart = echarts.init(chartDom);

        myChart.setOption(option);
    },
    methods:{

    }
  }
  </script>