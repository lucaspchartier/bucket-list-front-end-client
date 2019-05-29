'use strict'

const authEvents = require('./auth/events.js')
const addItemEvents = require('./upload/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.sign-out-btn').on('click', authEvents.onSignOut)

  $('.upload-area').on('submit', addItemEvents.onUpload)
  $('.get-all-item-btn').on('click', addItemEvents.onGetAllItems)
  $('.get-incomplete-item-btn').on('click', addItemEvents.onGetAllItems2)
  $('.get-completed-item-btn').on('click', addItemEvents.onGetAllItems3)
  $('.item-wall').on('submit', '.text-update', addItemEvents.onTextUpdate)
  $('.item-wall').on('submit', '.title-update', addItemEvents.onTitleUpdate)
  $('.item-wall').on('click', '.zzz', addItemEvents.onDeleteItem)
  $('.item-wall').on('click', '.yyy', addItemEvents.onCompleteItem)
  // $('.item-wall').on('click', '.item-update-btn', addItemEvents.onGetAllItems)

  $('.navbar-toggler').click(function () {
    $('.input-field').val('')
  })

  $('.sign-up-btn').click(function () {
    setTimeout(() => {
      $('.sign-up-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.sign-in-form').fadeOut(200)
  })

  $('.sign-in-btn').click(function () {
    setTimeout(() => {
      $('.sign-in-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.sign-up-form').fadeOut(200)
  })

  $('.chg-pass-btn').click(function () {
    setTimeout(() => {
      $('.change-password-form').fadeToggle()
      $('.input-field').val('')
    }, 200)
    $('.get-image-by-id-form').fadeOut(200)
  })

  $('.get-all-item-btn').click(function () {
    $('.change-password-form').fadeOut(200)
  })
})
