<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>    <!-- 라우터에서 지정하는 path 에 대해 컴포넌트를 지정한다.-->
</template>

<style lang="scss" src="./assets/css/style.scss">
</style>
