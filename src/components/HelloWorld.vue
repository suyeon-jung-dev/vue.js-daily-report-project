<template>
  <div class="hello">

    <!-- input text -->
    <input type="text" v-model="msg" placeholder="입력하세요.">

    <!--  input checkbox  -->
    <input type="checkbox" v-model="seen">

    <!-- input radio -->
    <input type="radio" v-model="age" value="30">
    <input type="radio" v-model="age" value="20">
    <input type="radio" v-model="age" value="10">
    <p>{{age}}</p>

    <!-- select -->
    <select v-model="age">
      <option value="30">30</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    updateScore(score) {
      this.score = score;   // 여기서 this 는 data 오브젝트를 말한다.
    },
    keyup() {
      console.log('enter');
    }
  },
  computed: {
    today() {
      // return new Date().getDate();
      return this.score + 1;
    }
  },
  data() {        // this.
    return {
      score: 0,   // this.score
      msg: 'nice to meet you',
      author: 'bob',
      age: 30,
      article: '' +
          '<strong>Hello</strong> world!!',
      seen : false
    }
  },
  // 뷰 컴포넌트 인스턴스의 life-cycle
  //https://v3-docs.vuejs-korea.org/guide/essentials/lifecycle.html#lifecycle-diagram

  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {       // 수시로 데이터 변경시 업데이트
    console.log('updated');
  },
  // beforeDestroy() {     // beforeDestroy 는 deprecated 됨. > beforeUnmount 를 사용하자.
  //   console.log('beforeDestroy');
  // },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
