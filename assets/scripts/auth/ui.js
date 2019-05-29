'use strict'

const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('.message-box').show(100)
  $('.message-box').html('You\'ve signed up successfully!')
  $('.sign-up-form').slideUp(200)
  $('.message-box').addClass('success-message')
  $('.message-box').removeClass('error-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const failure = (failureResponse) => {
  $('.message-box').show(100)
  $('.message-box').html('Something went wrong, please try again.')
  $('.message-box').addClass('error-message')
  $('.message-box').removeClass('success-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const passwordsDontMatch = (failureResponse) => {
  $('.message-box').show(100)
  $('.message-box').html('Passwords do not match.')
  $('.message-box').addClass('error-message')
  $('.message-box').removeClass('success-message')
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 5000)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('.logo').hide()
  $('.message-box').show(100)
  $('.user-name').html(`${signInResponse.user.email}'s Life and Dreams`)
  $('.message-box').html('You\'ve logged in successfully!')
  $('.message-box').addClass('success-message')
  $('.message-box').removeClass('error-message')
  $('.upload-section').addClass('block')
  $('.upload-section').removeClass('hidden')
  $('.sign-up-form').fadeOut(200)
  $('.sign-in-form').fadeOut(200)
  $('.chg-pass-btn').show()
  $('.sign-out-btn').show()
  $('.get-all-item-btn').show()
  $('.get-incomplete-item-btn').show()
  $('.get-completed-item-btn').show()
  $('.delete-image-btn').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 3000)
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('.message-box').show(100)
  $('.message-box').html('You\'ve changed your password successfully!')
  $('.message-box').addClass('success-message')
  $('.message-box').removeClass('error-message')
  $('#change-password-form').slideUp(500)
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 3000)
}

const changePassFailure = (failureResponse) => {
  $('.message-box').show(100)
  $('.message-box').html('New password cannot match old password.')
  $('.message-box').addClass('error-message')
  $('.message-box').removeClass('success-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const signOutSuccess = () => {
  $('.logo').show()
  $('.message-box').show(100)
  $('.message-box').html('You\'ve logged out successfully!')
  $('.message-box').addClass('success-message')
  $('.message-box').removeClass('error-message')
  $('.user-name').empty()
  $('.chg-pass-btn').hide()
  $('.change-password-form').fadeOut(200)
  $('.get-image-by-id-form').fadeOut(200)
  $('.sign-out-btn').hide()
  $('.get-all-item-btn').hide()
  $('.get-completed-item-btn').hide()
  $('.get-incomplete-item-btn').hide()
  $('.upload-section').removeClass('block')
  $('.upload-section').addClass('hidden')
  $('.item-wall').empty()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('#change-password-form').trigger('reset')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

// const signInFailure = (failureResponse) => {
//   $('.message-box').show(100)
//   $('.message-box').html('Email and password do not match, or account doesn\'t exist.')
//   $('.message-box').addClass('error-message')
//   $('.message-box').removeClass('success-message')
//   setTimeout(function () {
//     $('.message-box').fadeOut(200).empty()
//   }, 3000)
// }

module.exports = {
  signUpSuccess,
  failure,
  passwordsDontMatch,
  signInSuccess,
  changePasswordSuccess,
  changePassFailure,
  signOutSuccess
  // signInFailure
}
