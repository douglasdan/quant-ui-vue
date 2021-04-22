<template>
  <div class="hot-search">
    <a-row style="margin: 0 -34px; width: 100%">
      <a-col style="padding: 0 34px; margin-bottom: 24px; width: 100%;" :sm="12" :xs="24">
        <div class="num-info">
          <span class="title">
            平均应纳税额
          </span>
          <div class="value">
            <span class="total">12,321</span>
          </div>
          <div style="position: absolute; float:right; right: -10px; top: -10px;">
            统计期间：<a-range-picker/>
          </div>
        </div>
        <sb-bar-line style="height: 230px" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SbBarLine from './sb-bar-line'

export default {
  name: 'SbRankLine',
  components: {SbBarLine},
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
  .num-info{
    .title{
      color: @text-color-second;
      font-size: 14px;
      height: 22px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: nowrap;
    }
    .value{
      .total{
        color: @title-color;
        display: inline-block;
        line-height: 32px;
        height: 32px;
        font-size: 24px;
        margin-right: 32px;
      }
      .subtotal{
        color: @text-color-second;
        font-size: 16px;
        vertical-align: top;
        margin-right: 0;
        i{
          font-size: 12px;
          color: red;
          transform: scale(.82);
          margin-left: 4px;
        }
      }
    }
  }
</style>
