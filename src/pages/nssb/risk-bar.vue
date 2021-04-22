<template>
    <div id="risk-bar-chart1" style="width: 600px; height: 400px;">
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  var option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['引用次数']
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
            data: ['纳税类', '发票类', '财务类', '经营类']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '引用次数',
            type: 'bar',
            data: [225, 124, 322, 89],
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
    ]
}

  export default {
    name: 'RiskBar',
    data() {
        return {
            
        }
    },
    mounted() {
        var chartDom = document.getElementById('risk-bar-chart1');
        var myChart = echarts.init(chartDom);

        myChart.setOption(option);
    },
    methods:{

    }
  }
  </script>