<template>
  <div>
    <p @click="accordionToggle()">クリックして<span class="answer">解答</span>を見る</p>
    <div v-if="isOpened">
      <div>NAS(Network Attached Storage)は、TCP/IPのコンピュータネットワークに直接接続して使用するファイルサーバです。</div>
      <div>ファイルサービス専用のコンピュータであり、専用化や用途に合うようにチューニングされたOSなどにより、高速なファイルサービスと容易な管理機能が実現されています。</div>
      <div>NASでは、ファイルサーバをネットワーク上の複数台のサーバで共有するので、記憶領域の有効活用が期待できるため、「ア」が正解。</div>
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