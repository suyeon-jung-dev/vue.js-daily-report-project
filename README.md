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