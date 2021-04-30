<template>
  <component :is="componentTag()"
    :key="eid"
    v-bind="view.props"
    :view="view"
    :ref="view.refName"
    :refName="view.refName">

    {{ view.content}}

    <x-element :view="item" v-for="item in view.children"></x-element>
    
  </component>
</template>

<script>

import { uuid } from 'vue-uuid';

export default {
    name: "x-element",
    components: {
    },
    props: {
      view: {
        type: Object,
      }
    },
    watch: {
      viewData: {
        handler (newVal) {
          this.$nextTick(() => {
            this.$forceUpdate()
          })
        },
        deep: true,
        immediate: true
      }
    },
    mounted() {
      this.eid = this.$uuid.v4()
    },
    data() {
      return {
        eid: ""
      }
    },
    compute: {
      
    },
    methods: {
      componentTag() {
        if (this.view.component == 'String') {
          return "span"
        }
        if (typeof this.view != 'object') {
          return "span"
        }

        return this.view.component
      }
    }
}
</script>

<style>
 
</style>