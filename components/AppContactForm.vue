<template>
  <form @submit.prevent="sendEmail">
    <label for="name">Name:</label>
    <input autofocus v-model.trim="name" type="text" name="name" id="name">
    <label for="email">Email:</label>
    <input v-model.trim="email" type="email" name="email">
    <label for="message">Message:</label>
    <textarea v-model.trim="message" name="message" cols="30" rows="10"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
export default {
  name: 'AppContactForm',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail () {
      const emailData = {
        email: this.email,
        name: this.name,
        message: this.message
      }
      this.$store.dispatch('sendEmail', emailData)
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }

}
</script>

<style scoped>
form {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: center;
  height: 350px;
  font-size: 1.1rem;
  transition: all 500ms;
  color: #35495e;
}
form label {
  text-align: left;
}
form input[type="text"], form textarea, form input[type="email"] {
  border: none;
  background-color: transparent;
  padding: 7px 0 
}
form input:focus, form textarea:focus {
  outline: none;
  border-bottom: 1px solid #484848;
}
form input[type="submit"] {
  border:none;
  border-radius: 20px;
  padding: 10px 0;
  margin: 10px 0;
  background-color: #484848;
  font-size: 1.3rem;
  color: #fff;
  cursor: pointer;
}
form input[type="submit"]:hover {
  color: #ccc
}
@media screen and (max-width: 600px){
  form {
    width: 95%;
  }
}

</style>
