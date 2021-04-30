<template>
  <a-card v-bind="view.props">
    <a slot="extra" href="#">{{ view.props.extra }}</a>
    
    <!-- <x-element :view="item" v-for="item in view.children"></x-element> -->

  </a-card>
</template>

<script>

export default {
  name: "x-card",
  components: {
  },
  props: {
    view: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  }
}
</script>