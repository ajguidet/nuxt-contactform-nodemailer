import axios from '~/plugins/axios'
export const state = () => ({
  emailProvider: {
    service: 'gmail',
    username: '',
    password: ''
  }
})

export const mutations = {
  setNewEmailProvider (state, payload) {
    state.emailProvider = payload
  }
}

export const getters = {
  emailProvider (state) {
    return state.emailProvider
  }
}

export const actions = {
  async sendEmail ({state, commit}, payload) {
    console.log('EMAIL PROVIDER', state.emailProvider)

    let emailInfo = payload
    let emailProvider = state.emailProvider
    console.log('PayLoad', payload)
    if (emailProvider.username !== '' && emailProvider.password !== '') {
      try {
        const { res } = await axios.post('/api/nodemailer', {
          emailInfo,
          emailProvider
        })
        alert('Message send successfully')
      } catch (e) {
        alert(e)
      }
    }
  }
}
