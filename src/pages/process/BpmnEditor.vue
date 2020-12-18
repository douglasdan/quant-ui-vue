<template>
  <div class="analysis">
    xxxxx
    <bpmn-view></bpmn-view>
  </div>
</template>
  
<script>
  
  import BpmnView from '@/components/bpmn/bpmn-view'

  export default {
    name: 'bpmn-editor',
    data () {
      return {
        loading: true
      }
    },
    created() {
      setTimeout(() => this.loading = !this.loading, 1000)
    },
    components: { BpmnView }
  }
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
  