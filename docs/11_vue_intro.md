# Vue.js

本ドキュメントでは、Vue.jsでどのように実装していくかについて説明する（予定である）。

## #1 はじめかた

以下の手順で、Home, Aboutに並んで、Sampleを作成できる。

- `\src\views`配下に、`Sample.vue`を作成
- `About.vue`の内容をコピペ
- `App.vue`の`<template>`タグ内に、以下を追加：
  - `<router-link to="/sample">Sample</router-link>`
- `\src\shirakura\sampvuele\src\router\index.js`に以下、追加

```js
{
  path: "/sample",
  name: "Sample",
  component: () =>
    import("../views/Sample.vue"),
  },
```

コンポーネントを作成し、Sampleの中で表示する。

- `components`配下に、`ApSiken.vue`を作成する

```vue
<template>
  <div>
    test
  </div>
</template>

<script>
</script>

<style scoped>
</style>
```

- `Sample.vue`に以下を追記
  - `<template>`
    - `<ApSiken></ApSiken>`
  - `<script>`
    - `import ApSiken from "@/components/ApSiken.vue";`

```vue
export default {
  components: {
    ApSiken,
  }
}
```
