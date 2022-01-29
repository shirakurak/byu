<template>
  <div class="ap_siken">
    <h2>めざせカコモンマスター</h2>
    <Exercise1></Exercise1>
    <Answer1></Answer1>
    <hr>
    <Exercise2></Exercise2>
    <Answer2></Answer2>
  </div>
</template>

<script>
import Exercise1 from "@/components/ApSiken/Exercise1.vue";
import Answer1 from "@/components/ApSiken/Answer1.vue";
import Exercise2 from "@/components/ApSiken/Exercise2.vue";
import Answer2 from "@/components/ApSiken/Answer2.vue";

export default {
  components: {
    Exercise1,
    Answer1,
    Exercise2,
    Answer2,
  }
}
</script>

<style scoped>
.ap_siken {
  text-align:left
}
hr {
  border-width: 0 0 8px;
  border-style: solid;
  border-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 1"><circle fill="hsla(0, 0%, 65%, 1.0)" cx="1" cy="0.5" r="0.5"/></svg>') 0 0 100% repeat;
  width: 40%;
}
</style>