<!-- 
  .vueファイル
    - Vue3のコンポーネントを定義している
    - 3つの部分に分かれる
      - <template>
      - <script>
      - <style>
-->

<!-- 
  <template>
    - コンポーネントのテンプレートの内容
-->
<template>
  <!-- Vue3のロゴイメージを表示する -->
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- 
    HelloWorldタグ
      - HelloWorldというコンポーネントを表示する
      - 更に、HelloWorld.vueファイルを読み込んで利用する
  -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// componentsフォルダ配下のHelloWorld.vueをロードし、HelloWorldオブジェクトを読み込む
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
