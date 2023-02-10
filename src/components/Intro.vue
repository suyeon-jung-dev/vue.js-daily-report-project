<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br>Report</h1>
      <router-link
        class="button"
        :to="todayUrl"
      > <!-- 데이터와 바인딩 한다는 의미로 앞에 콜론( : ) 을 붙여준다. -->
        START
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: `Intro`,
  methods: {},
  computed: {
    todayUrl() {
      let todayUrl = moment(new Date()).format('YYYY–MM-DD');
      return `/day/${todayUrl}`;  // templaet literal 은 백틱으로 감싼다.
    }
  },
  data() {
    return {}
  },
  props: {}
}
</script>

<style scoped>

</style>