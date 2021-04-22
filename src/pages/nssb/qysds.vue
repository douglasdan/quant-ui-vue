<template>
    <iframe :src="url" frameborder="0" :width="w" :height="h"></iframe>
</template>
  <script>
  
  export default {
    components: {
    },
    data() {
      return {
        w:0,
        h:0,
        url: ''
      };
    },
    mounted() {
      this.h = window.innerHeight - 70 - 40
      this.w = window.innerWidth - 256
      this.url = 'http://47.92.96.112:8009/webroot/decision/view/report?viewlet=qysds-jb.xlsx.cpt&op=write_plus' //?width='+this.w+'&height='+(this.h+40)
    },
    methods: {
      syncStockList() {
        
      }
    }
  };
  </script>
  
  <style>
 
  </style>
  