<template>
    <div id="sb-proc-chart1">
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
                  {value: 1048, name: '已申报'},
                  {value: 735, name: '未申报'},
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
    name: 'SbProcess',
    data() {
        return {
            
        }
    },
    mounted() {
        var chartDom = document.getElementById('sb-proc-chart1');
        var myChart = echarts.init(chartDom);

        myChart.setOption(option);
    },
    methods:{

    }
  }
  </script>
  
  <style scoped>
  
  </style>
  