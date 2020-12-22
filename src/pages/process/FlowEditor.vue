<template>
  <div class="bpmn" :style="`min-height: ${minHeight}px;`">
    <dts-bpmn-editor :url="bpmnUrl"></dts-bpmn-editor>
  </div>
</template>

<script>
  
  import {mapState} from 'vuex'
  import DtsBpmnEditor from '@/components/bpmn/dts-bpmn-editor'

  export default {
    name: 'bpmn-editor',
    data () {
      return {
        loading: true,
        bpmnUrl: ''
      }
    },
    created() {
      setTimeout(() => this.loading = !this.loading, 1000)
    },
    computed: {
      ...mapState('setting', ['fixedTabs']),
      minHeight() {
        return window.innerHeight - (this.fixedTabs ? 0 : 64);
      }
    },
    components: { 
      //DtsBpmnViewer, 
      DtsBpmnEditor 
    }
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
  