<template>
    <div id="risk-pie-chart1" style="width: 600px; height: 400px;">
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  let option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
      orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 225, name: '纳税类'},
                {value: 124, name: '发票类'},
                {value: 322, name: '财务类'},
                {value: 89, name: '经营类'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

  export default {
    name: 'RiskPie',
    data() {
        return {
            
        }
    },
    mounted() {
        var chartDom = document.getElementById('risk-pie-chart1');
        var myChart = echarts.init(chartDom);

        myChart.setOption(option);
    },
    methods:{

    }
  }
  </script>