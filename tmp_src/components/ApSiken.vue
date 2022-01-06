<template>
  <div class="ap_siken">
    <h2>めざせカコモンマスター</h2>
    <Exercise1></Exercise1>
    <Answer1></Answer1>
  </div>
</template>

<script>
import Exercise1 from "@/components/ApSiken/Exercise1.vue";
import Answer1 from "@/components/ApSiken/Answer1.vue";

export default {
  components: {
    Exercise1,
    Answer1,
  }
}
</script>

<style scoped>
.ap_siken {
  text-align:left
}
</style>