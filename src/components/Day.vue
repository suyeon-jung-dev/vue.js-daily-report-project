<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}    <!-- @/router/index.js 의 path에 설정한 date params 를 참조한다. -->
    </h1>

    <ul class="day-list">
      <li
          v-for="item in items"
          :key="item.id"
          class="day-list-item"
          :class="{'open': item.open}"
      >
        <div class="time">
          <h2>{{item.id}}</h2>
        </div>

        <div class="action">
          <p
              v-if="!item.open"
              @click="toggleOpen(item)"
          >
            {{item.action}}
            <span v-if="item.action.length===0">내용을 작성해주세요.</span>
          </p>
          <input v-if="item.open" type="text" v-model="item.action" @keyup.enter="updateItem(item)" placeholder="한 일을 작성해주세요">
        </div>

        <!-- 스코어 컴포넌트 -->
        <day-score
          @onUpdateScore="onUpdateScore"
          :item="item"
        ></day-score>

        <div class="note" v-if="item.open">
          <textarea v-model="item.note" placeholder="노트를 작성해주세요"></textarea>
        </div>

        <div class="buttons" v-if="item.open">
          <button class="save" @click="updateItem(item)">저장</button>
          <button class="cancel" @click="toggleOpen(item)">취소</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DayScore from "@/components/DayScore";
import axios from 'axios';
import moment from "moment";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Day",
  components: {DayScore},
  methods: {
    // 스코어 버튼 누를 때 호출되는 method
    onUpdateScore(item, score) {
      // v-model 값 변경
      item.score = score;
      console.log('Day component', score);
      // 값을 DB에 저장
      this.updateItem(item);
    },
    // axios 로 firebase database API 로 값을 불러온다.
    getItems() {
      // ajax 요청
      console.log("get items");
      let url = `https://daily-report-project-sue-default-rtdb.asia-southeast1.firebasedatabase.app/items.json?orderBy="$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-24"`;
      axios.get(url).then((res) => {
        this.items = this.displayItems(res.data);
      });
    },
    // eslint-disable-next-line
    displayItems(data) {

      let items = [];
      let startTime = '08:00';

      // 1. 2시간 단위의 테스크 포밋 컴포넌트 12개를 정적으로 생성
      for(let i = 0; i < 12; i++) {
        let datetime = moment(this.$route.params.date + ' ' + startTime);
        let itemKey = `${this.$route.params.date}-${datetime.add(i*2, 'hours').format('HH')}-${datetime.add(2, 'hours').format('HH')}`;
        let item = {
          id: itemKey,
          action: '',
          note: '',
          open: false,
          score: undefined
        }
        // todo - isWrited 컬럼 추가해서 작성한 값이 있는지 여부 체크해서 작성한 값이 없는 슬롯은 css 로 회색처리 한다. 그럼 작성중인 슬롯도 알아야 하니 focused 처리도 해주어야 할 듯

        // 2. api 로 전달받은 data 값에 대해 key 를 기준으로 돌면서 data 순회
        Object.keys(data).map((key) => {
          if(key === itemKey) {
            item = data[key];
          }
        })
        items.push(item);
      }
    return items;
    },
    updateItem(item) {
      let url = `https://daily-report-project-sue-default-rtdb.asia-southeast1.firebasedatabase.app/items/${item.id}.json`;
      // axios.put(url, body 에 담길 객체).then(function() => {});
      axios.put(url, item).then((res) => {
        console.log('update', res);
        this.getItems();  // 저장이 성공하면 get api 다시 호출하여 저장 된 값이 반영되었는지 바로 확인 가능하다.
      });
    },
    toggleOpen(item) {
      item.open = !item.open;
    }
  },
  computed: {},
  data() {
    return {
      items: []
    }
  },
  props: {},
  created() {   // 컴포넌트 라이프 사이클 중 created 상태일 때
    this.getItems();    // Day 컴포넌트가 생성될때, getItems method 호출
  },
  watch: {
    '$route' () {
      this.getItems();
    }
  }
}
</script>

<style scoped>

</style>