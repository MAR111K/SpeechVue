<template>
  <div id="app">
    <div class="main-wrapper">
      <img class="logo" src="./assets/logo.png" alt="">
      <h1>ue Speech API</h1>
    </div>
    <div class="btn-record" @click="record = !record">{{record?'Stop':'Record'}}</div>
    <vue-web-speech
      lang="ru-RU"
      v-model="record"
      @results="onResults"
      @unrecognized="unrecognized">
      <template v-slot:input="{text}">
        <textarea :value="text" />
      </template>
    </vue-web-speech>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      record: false,
      results: null,
    }
  },
  methods: {
    onResults (data) {
      this.results = data
    },
    unrecognized () {
      alert('Не удалось распознать речь')
    },

  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
#app
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
h1
  color: green
  font-family: 'Montserrat', sans-serif
html
  background-color: #2b2b2b
.main-wrapper
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
.logo
  width: 30px
  height: 30px
.btn-record
  border: 0
  border-radius: 50px
  color: green
  background-color: white
  text-align: center
  width: 25%
  height: 3vh
textarea
  width: 90%
  height: 400px
  font-family: 'Montserrat', sans-serif
  color: white
  background-color: #2b2b2b
  border: 0
</style>