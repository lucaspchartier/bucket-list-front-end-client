'use strict'

const authEvents = require('./auth/events.js')
const uploadEvents = require('./upload/events.js')

$(() => {
  // Auth events
  authEvents.addHandlers()
  // Upload events
  uploadEvents.addHandlers()
  // Form toggles
  $('.navbar-toggler').click(() => {
    $('.input-field').val('')
  })

  $('.sign-up-btn').click(() => {
    setTimeout(() => {
      $('.sign-up-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.sign-in-form').fadeOut(200)
  })

  $('.sign-in-btn').click(() => {
    setTimeout(() => {
      $('.sign-in-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.sign-up-form').fadeOut(200)
  })

  $('.chg-pass-btn').click(() => {
    setTimeout(() => {
      $('.change-password-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.get-image-by-id-form').fadeOut(200)
  })

  $('.get-all-item-btn').click(() => {
    $('.change-password-form').fadeOut(200)
  })
})
