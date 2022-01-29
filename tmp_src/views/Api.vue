<template>
  <div id="api">
    <p>APIに関する、サンプルページを作成します。</p>
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <p class="api">CoinDesk APIによる取得結果の`response.data.bpi`をそのまま表示すると、以下です:</p>
      <p>{{ info }}</p>
      
      <div class="api">
        <p>必要な情報だけ表示すると、以下です（United States Dollar / British Pound Sterling / Euro）:</p>
      </div>
      <div v-for="currency in info" :key="currency.description" class="currency">
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#api',
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scoped>
.api {
  text-align:left
}
</style>


