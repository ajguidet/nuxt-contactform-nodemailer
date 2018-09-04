<template>
  <div>
    <h4>Insert your gmail config first</h4>
      <div class="gmail">
        <label for="gmail">Email:</label>
        <input type="email" name="gmail" placeholder="Gmail email" :value="gmailConfig.username" @input="updateUsername">
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="password" :value="gmailConfig.password" @input="updatePassword">
        <button @click.stop="changeGmailValue">{{message.value ? '¡SAVED!' : 'SAVE'}}</button>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import { setTimeout } from 'timers';
export default {
  name: 'GmailConfig',
  data () {
    return {
      username: '',
      password: '',
      message: {
        text: '¡SAVED!',
        time: 1500,
        value: false
      }
    }
  },
  props: {
    gmailConfig: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateUsername (e) {
      this.username = e.target.value
    },
    updatePassword (e) {
      this.password = e.target.value
    },
    changeGmailValue () {
      const emailProvider = {
        service: 'gmail',
        username: this.username,
        password: this.password
      }
      this.$store.commit('setNewEmailProvider', emailProvider)
      let time = this.message.time
      this.message.value = true
      setTimeout(() => {
        this.message.value = false
      },time)
    }
  }
}
</script>

<style scoped>
.gmail {
  width: 60%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
