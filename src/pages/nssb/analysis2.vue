<template>
  <div style="align-content: center;">
      <a-row style="margin-top: 0" :gutter="[24, 24]">
          <a-col :sm="24" :md="12" :xl="5">
            <div style="background-color: rgb(24, 226, 182); height: 80px; border-radius: 4px;">
              <div style="padding-top: 10px; padding-left: 40px; font-size: 16px;">
                <span>风险模型数量</span> <span style="color: rgba(255, 145, 0, 0.986);">130个</span>
              </div>
              <div style="padding-top: 10px; padding-left: 40px;">
                <span>涉及风险指标340个</span>
              </div>
            </div>
          </a-col>

          <a-col :sm="24" :md="12" :xl="4">
            <div style="background-color: white; height: 80px; border-radius: 4px;">
              <div style="padding-top: 10px; padding-left: 40px; font-size: 16px;">
                <span>其中：纳税类</span> <span style="color: rgba(255, 145, 0, 0.986);">40个</span>
              </div>
              <div style="padding-top: 10px; padding-left: 40px;">
                <span>涉及风险指标120个</span>
              </div>
            </div>
          </a-col>
          
          <a-col :sm="24" :md="12" :xl="4">
            <div style="background-color: white; height: 80px; border-radius: 4px;">
              <div style="padding-top: 10px; padding-left: 40px; font-size: 16px;">
                <span>发票类</span> <span style="color: rgba(255, 145, 0, 0.986);">30个</span>
              </div>
              <div style="padding-top: 10px; padding-left: 40px;">
                <span>涉及风险指标230个</span>
              </div>
            </div>
          </a-col>
          <a-col :sm="24" :md="12" :xl="4">
            <div style="background-color: white; height: 80px; border-radius: 4px;">
              <div style="padding-top: 10px; padding-left: 40px; font-size: 16px;">
                <span>财务类</span> <span style="color: rgba(255, 145, 0, 0.986);">30个</span>
              </div>
              <div style="padding-top: 10px; padding-left: 40px;">
                <span>涉及风险指标221个</span>
              </div>
            </div>
          </a-col>

          <a-col :sm="24" :md="12" :xl="4">
            <div style="background-color: white; height: 80px; border-radius: 4px;">
              <div style="padding-top: 10px; padding-left: 40px; font-size: 16px;">
                <span>经营类</span> <span style="color: rgba(255, 145, 0, 0.986);">30个</span>
              </div>
              <div style="padding-top: 10px; padding-left: 40px;">
                <span>涉及风险指标127个</span>
              </div>
            </div>
          </a-col>
        </a-row>


        <a-row>
          <a-card title="风险模型引用情况" style="">
            <a slot="extra" href="#">统计时间：2020.04-2021.03</a>
            
            <a-col :span='12'>
              <risk-bar></risk-bar>
            </a-col>
            <a-col :span='12'>
              <a-card :loading="loading" :bordered="false" style="margin-top: 0px;" title="风险模型引用排行榜">
                <a-table
                :columns="columns"
                :row-key="record => record.rank"
                :data-source="data"
                :loading="loading"
              >
              </a-table>
            </a-card>
            </a-col>
          </a-card>
        </a-row>


        <a-row>
          <a-card title="风险模型命中情况" style="">
            <a slot="extra" href="#">统计时间：2020.04-2021.03</a>
            
            <a-col :span='12'>
              <risk-pie></risk-pie>
            </a-col>
            <a-col :span='12'>
              <a-card :loading="loading" :bordered="false" style="margin-top: 0px;" title="风险模型引用排行榜">
                <a-table
                :columns="columns"
                :row-key="record => record.rank"
                :data-source="data"
                :loading="loading"
              >
              </a-table>
            </a-card>
            </a-col>
          </a-card>
        </a-row>

  </div>    
</template>
    <script>

      import ChartCard from '../../components/card/ChartCard'
      import RiskBar from './risk-bar'
      import RiskPie from './risk-pie'
    
    export default {
      components: {
        ChartCard, RiskBar, RiskPie
      },
      data() {
        return {
          data: [ {'rank':1, 'modelName':'模型1', riskIndexNum: 5, refTimes: 103},
                  {'rank':2, 'modelName':'模型2', riskIndexNum: 2, refTimes: 102},
                  {'rank':3, 'modelName':'模型3', riskIndexNum: 2, refTimes: 101},
                  {'rank':4, 'modelName':'模型4', riskIndexNum: 5, refTimes: 100},
            ],
          columns:[
            {
                title: '排名',
                dataIndex: 'rank',
            },
            {
                title:'模型名称',
                dataIndex: 'modelName'
            },
            {
                title:'风险指标数',
                dataIndex: 'riskIndexNum'
            },
            {
                title:'最近12月累计引用次数',
                dataIndex: 'refTimes',
            }
            ]
        };
      },
      mounted(){
        
      },
      methods: {
        
      }
    };
    </script>
    
    <style lang="less" scoped>
      .extra-wrap{
        .extra-item{
          display: inline-block;
          margin-right: 24px;
          a:not(:first-child){
            margin-left: 24px;
          }
        }
      }
      @media screen and (max-width: 992px){
        .extra-wrap .extra-item{
          display: none;
        }
      }
      @media screen and (max-width: 576px){
        .extra-wrap{
          display: none;
        }
      }
    
    </style>