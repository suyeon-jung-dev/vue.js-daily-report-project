<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <button @click="clickToday">
          <font-awesome-icon icon="fa-solid fa-house" />
          <span>오늘</span>
        </button>
      </li>
      <li>
        <router-link to="/calendar">
          <font-awesome-icon icon="fa-regular fa-calendar" />
          <span>달력</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <font-awesome-icon icon="fa-solid fa-gear" />
          <span>설정</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="fa-regular fa-face-laugh-wink" />
          <span>소개</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import moment from 'moment';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',
  components: {FontAwesomeIcon},
  methods: {
    clickToday() {
      // 클릭했을때 라우터로 이동시켜준다.
      let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
      this.$router.push(todayUrl);
    }
  },
  computed: {},
  data() {
    return {}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
