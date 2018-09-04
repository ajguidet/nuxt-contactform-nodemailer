  'use strict'
  
  const express = require('express')
  const nodemailer = require('nodemailer')
  const app = express()

  app.use(express.json())

    app.post('/', function (req, res) {

    let emailInfo = req.body.emailInfo
    let emailProvider = req.body.emailProvider
    sendMail(emailInfo, emailProvider)
    res.status(200).json({ 'message': 'Your mail send successfully' })
    
  })
  module.exports = {
    path: '/api/nodemailer',
    handler: app
  }
  const sendMail = (emailInfo, emailProvider ) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailProvider.username,
        pass: emailProvider.password
      }
    })
    setTimeout(() => {
      transporter.sendMail({
        from: emailInfo.email,
        to: emailInfo.email,
        subject: `Message from ${emailInfo.name}`,
        html: `<b><h1>${emailInfo.message}</h1></b>`
      })
    },100)
  }
  