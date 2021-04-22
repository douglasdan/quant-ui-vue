<template>
    <div style="align-content: center;">
        <a-row style="margin-top: 0" :gutter="[24, 24]">
            <a-col :sm="24" :md="12" :xl="6">
              <chart-card :loading="loading" title="本年累计销售收入" total="￥ 123,456,789">
                <div>
                    <mini-bar />
                </div>
                <div slot="footer">
                    同比 <span style="color: green;"><a-icon type="caret-up"/>12%</span>
                </div>
              </chart-card>
            </a-col>
            <a-col :sm="24" :md="12" :xl="6">
              <chart-card :loading="loading" title="本年累计应纳税额" total="￥ 123,456,789">
                <a-tooltip :title="$t('introduce')" slot="action">
                  <a-icon type="info-circle-o" />
                </a-tooltip>
                <div>
                    <mini-bar />
                </div>
                <div slot="footer">
                    同比 <span style="color: red;"><a-icon type="caret-down"/>10%</span>
                </div>
              </chart-card>
            </a-col>
            
            <a-col :sm="24" :md="12" :xl="6">
              <chart-card :loading="loading" title="本期销售收入" total="￥ 123,456,789">
                <a-tooltip :title="$t('introduce')" slot="action">
                  <a-icon type="info-circle-o" />
                </a-tooltip>
                <div>
                  <mini-bar />
                </div>
                <div slot="footer">
                    同比 <span><a-icon type="caret-up"/>2%</span>
                </div>
              </chart-card>
            </a-col>

            <a-col :sm="24" :md="12" :xl="6">
              <chart-card :loading="loading" title="本期应纳税额" total="73%">
                <a-tooltip :title="$t('introduce')" slot="action">
                  <a-icon type="info-circle-o" />
                </a-tooltip>
                <div>
                    <mini-bar />
                  </div>
                  <div slot="footer">
                    同比 <span><a-icon type="caret-down"/>2%</span>
                  </div>
              </chart-card>
            </a-col>
          </a-row>

          <a-row style="margin: 0 -12px" :gutter="[24, 24]">
            <a-col :span="8">
                <a-card :loading="loading" :bordered="false" style="margin-top: 24px;" title="申报进度统计">
                  <sb-process style="height: 310px" />
                </a-card>
              </a-col>
            <a-col :span="16">
                <a-card :loading="loading" :bordered="false" style="margin-top: 24px" title="成员单位申报排名">
                    <sb-rank />
                </a-card>
            </a-col>
          </a-row>

          <a-row style="margin: 0 -12px" :gutter="[24, 24]">
            <a-col :span="10">
                <a-card :loading="loading" :bordered="false" style="margin-top: 24px;" title="本年累计税负率排行榜">
                    <a-table
                    :columns="columns"
                    :row-key="record => record.rank"
                    :data-source="data"
                    :loading="loading"
                  >
                  <template slot="yearAveTaxRate" slot-scope="yearAveTaxRate"> {{ yearAveTaxRate }}</template>
                  </a-table>
                </a-card>
              </a-col>
            <a-col :span="14">
                <a-card :loading="loading" :bordered="false" style="margin-top: 24px" title="成员单位申报排名">
                    <sb-rank-line />
                </a-card>
            </a-col>
          </a-row>


    </div>    
</template>
<script>
    
    import ChartCard from '../../components/card/ChartCard'
    import MiniArea from '../../components/chart/MiniArea'
    import MiniBar from '../../components/chart/MiniBar'
    import MiniProgress from '../../components/chart/MiniProgress'
    import Bar from '../../components/chart/Bar'
    import RankingList from '../../components/chart/RankingList'
    import Trend from '../../components/chart/Trend'
    import HotSearch from '../../pages/dashboard/analysis/HotSearch'
    import SalesData from '../../pages/dashboard/analysis/SalesData'
    import SbProcess from './sb-process.vue'
    import SbRank from './sb-rank.vue'

    import SbRankLine from './sb-rank-line.vue'

    export default {
      components: {
        ChartCard, MiniArea, MiniBar, MiniProgress, Bar, RankingList, Trend, HotSearch, SalesData, SbProcess, SbRank,
        SbRankLine
      },
      data() {
        return {
            loading: false,
            pieStyle: {
                stroke: '#fff',
                lineWidth: 1
            },
            labelConfig: ['percent', {
                formatter: (val, item) => {
                    return item.point.item + ': ' + val
                }
            }],
            data: [ {'rank':1, 'companyName':'广东公司', yearTaxRate:'35%', yearAveTaxRate:'31%'},
                    {'rank':2, 'companyName':'江苏公司', yearTaxRate:'33%', yearAveTaxRate:'31%'},
                    {'rank':3, 'companyName':'浙江公司', yearTaxRate:'38%', yearAveTaxRate:'31%'},
                    {'rank':4, 'companyName':'上海公司', yearTaxRate:'32%', yearAveTaxRate:'31%'},
            ],
            pagination: {},
            loading: false,
            columns:[
            {
                title: '排名',
                dataIndex: 'rank',
            },
            {
                title:'公司',
                dataIndex: 'companyName'
            },
            {
                title:'本年累计税负',
                dataIndex: 'yearTaxRate'
            },
            {
                title:'本年累计行业平均税负',
                dataIndex: 'yearAveTaxRate',
                scopedSlots: { customRender: 'yearAveTaxRate' },
            },
            ],
        };
      },
      mounted(){
        
      },
      methods: {
        syncStockList() {
          
        }
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