<template>
  <a-layout id="components-layout-demo-top-side-2" style="text-align:center">
    <a-layout-header class="header">
     
    </a-layout-header>
    <a-layout>
        
    </a-layout>
  </a-layout>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      collapsed: false,
      stock: {},

      loadingStock: false
    };
  },
  methods: {
    onSelectStock(s){
      if(s) {
        this.stock = s


      }
    },
    syncStockList() {
      
    }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
