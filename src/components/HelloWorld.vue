<template>
  <div class="hello">
    <button @click.once="updateScore(1)">클락하세요</button>
    <input type="text" @keyup.enter="keyup">
    <h1>score: {{score}}</h1>
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
