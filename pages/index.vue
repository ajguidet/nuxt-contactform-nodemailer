<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-contactform-nodemailer
      </h1>
      <h2 class="subtitle">
        Nuxtjs starter template with nodemailer added to allow forms sent by email.
      </h2>
      <gmail-config :gmailConfig="emailProvider"/>
      <h3 class="subtitle">Contact Form</h3>
      <app-contact-form @sendEmail="send" />
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppContactForm from '~/components/AppContactForm.vue'
import gmailConfig from '~/components/gmailConfig.vue'
import {mapState} from 'vuex'

export default {
  components: {
    AppLogo,
    AppContactForm,
    gmailConfig
  },
  asyncData (context, callback) {
    if (process.client) {
      console.log('contextClient')
    }
    callback (null, {
      emailProvider: {
        service: context.store.state.emailProvider.service,
        username: context.store.state.emailProvider.username,
        password: context.store.state.emailProvider.password
      }
    })
  },
  methods: {
    send () {
      alert('HELL=')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

