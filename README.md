# daily-report-project

## 소개
- 하루를 2시간 단위로 나눠
- 오늘 한 일을 기록하고
- 태스크 별 평점을 메기고
- 몇 가지 설정을 할 수 있다.

## 요구사항
1. SPA 구조
2. REST API 사용

## 서비스 구조
* 첫페이지 / 
  * 서버스 로고 등장 
  * START를 누르면 오늘 날짜로 이동 
* 오늘 /day/2018-01-01
  * 각 날짜(오늘)의 시간대가 나타나고
  * 한 일을 직접 입력할 수 있다
  * 점수를 버튼 클릭으로 메길 수 있다
  * 저장된다.
* 달력 calendar
  * 익숙한 달력 UI를 보여준다
  * 날짜를 클릭하면 과거로 이동할 수 있다
* 설정 setting
  * 앱에 대한 몇 가지 설정을 할 수 있다
  * 소개 about
  * 서비스 소개를 보여준다

## Todo
- [ ] composition api 의 ```<script setup>``` 버전으로 새 브랜치에 작업해보기

## xeicon 대신 font-awesome 라이브러리 추가
공식문서: https://fontawesome.com/docs/web/use-with/vue/#you-re-ready-to-add-icons
1. add SVG Core
```
yarn add @fortawesome/fontawesome-svg-core
```
2. Add icon packages
```
# Free icons styles
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons
```

3. for Vue 3.x
```
yarn add @fortawesome/vue-fontawesome@latest-3
```
4. 라이브러리 import

공식문서: https://fontawesome.com/docs/web/use-with/vue/add-icons

```
/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
```
5. 라이브러리 추가 테스트 방법

https://fontawesome.com/docs/web/use-with/vue/add-icons#call-the-icons
```
<template>
  <div id="app">

    <!-- Add the style and icon you want using the String format -->
    <font-awesome-icon icon="fa-solid fa-user-secret" />

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue.js preset setup
* Manually select features
  * Babel
  * Router
  * Vuex
  * Css pre-processors
  * Linter / Formatter
* use history mode for router? Y
* SCSS/SASS
* ESLint with error prevention only
* Lint on save
* In dedication config files