<template>
  <div>
    <p @click="accordionToggle()">クリックして<span class="answer">解答</span>を見る</p>
    <div v-if="isOpened">
      <div>プロキシサーバは、内部ネットワーク内の端末からの要求に応じてインターネットへのアクセスを代理する装置です。</div>
      <div>単にプロキシともいいます。</div>
      <div>プロキシサーバを設置すると、キャッシュ機能によるレスポンス向上、認証やフィルタリングによるセキュリティ、内部ネットワークの秘匿化などの効果を期待できます。</div>
      <div>「ウ」が正解です。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    accordionToggle: function() {
      this.isOpened = !this.isOpened;
    }
  }
}
</script>

<style scoped>
.answer {
  color:#FF3300;
}
</style>