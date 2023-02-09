<template>
  <div class="hello">
    <h1>new-component</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "NewComponent",
  methods: {},
  computed: {},
  data() {
    return {}
  },
  // 방법 1. 오브젝트 형식으로 작성
  // key: Type
  /**
  props: {
    msg: String,
    author: String
  }
  */

  // 방법 2. 배열 형식으로 작성
  //
  props: [
      'msg',
      'author'
  ]
}
</script>

<style scoped>

</style>