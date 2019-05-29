const handle = require('../templates/helpers/index.handlebars')
// const store = require('../store.js')

const failure = (failureResponse) => {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Failed, please try again.')
  $('.upload-message-box').addClass('error-message')
  $('.upload-message-box').removeClass('success-message')
  setTimeout(() => $('.message-box').fadeOut(200).empty(), 3000)
}

const idFailure = (failureResponse) => {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('This ID does not exist.')
  $('.upload-message-box').addClass('error-message')
  $('.upload-message-box').removeClass('success-message')
  setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 2500)
}

const uploadSuccess = (signUpResponse) => {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Item added successfully!')
  $('.upload-message-box').addClass('success-message')
  $('.upload-message-box').removeClass('error-message')
  setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 3000)
}

const deleteSuccess = (deleteResponse) => {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Item deleted successfully!')
  $('.upload-message-box').addClass('success-message')
  $('.upload-message-box').removeClass('error-message')
  setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 3000)
}

const getAllItemsSuccess = (getItemSuccess) => {
  $('.item-wall').empty()
  if (getItemSuccess.items.length === 0) {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html('Your account currently has no dreams.')
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 5000)
  } else {
    const index = handle({ items: getItemSuccess.items })
    $('.item-wall').html(index)
    getItemSuccess.items.forEach((x) => {
      if (x.completed === false) {
        $('.blah-' + x._id).removeClass('strike')
      } if (x.completed === true) {
        $('.item-update-btn-' + x._id).hide()
        $('.item-complete-btn-' + x._id).hide()
      }
    })
  }
  $('.xxx').click(() => {
    $('.lala-' + event.target.attributes['data-id'].value).fadeToggle(200)
  })
}

const getAllItemsSuccess2 = (getItemSuccess) => {
  $('.item-wall').empty()
  if (getItemSuccess.items.length === 0) {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Your Account Has No More Dreams`)
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 5000)
  } else {
    const index = handle({ items: getItemSuccess.items })
    $('.item-wall').html(index)

    getItemSuccess.items.forEach((x) => {
      if (x.completed === false) {
        $('.blah-' + x._id).removeClass('strike')
        $('.item-update-btn-' + x._id).hide()
        $('.item-complete-btn-' + x._id).hide()
        $('.item-remove-btn-' + x._id).hide()
      } if (x.completed === true) {
        $('.haha-' + x._id).remove()
      }
    })
  }
  $('.xxx').click(() => {
    $('.lala-' + event.target.attributes['data-id'].value).fadeToggle(200)
  })
}

const getAllItemsSuccess3 = (getItemSuccess) => {
  $('.item-wall').empty()
  if (getItemSuccess.items.length === 0) {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Your Account Has No More Dreams`)
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 5000)
  } else {
    const index = handle({ items: getItemSuccess.items })
    $('.item-wall').html(index)

    getItemSuccess.items.forEach((x) => {
      if (x.completed === false) {
        $('.haha-' + x._id).hide()
        // $('.blah-' + x._id).removeClass('strike')
      } if (x.completed === true) {
        $('.item-update-btn-' + x._id).hide()
        $('.item-complete-btn-' + x._id).hide()
        $('.item-remove-btn-' + x._id).hide()
      }
    })
  }
  // $('.xxx').click(() => {
  //   $('.lala-' + event.target.attributes['data-id'].value).fadeToggle(200)
  // })
}

// $('.item-complete-btn').click(() => {
//   $('.upload-message-box').html('CONGRATS')
//   $('.upload-message-box').addClass('success-message')
//   $('.upload-message-box').removeClass('error-message')
//   setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 5000)
// })

// const completedItemCross = (completeSuccess) => {
//   if (completeSuccess.item.completed === true) {
//     const index2 = handle({ item: completeSuccess.item })
//     $('.item-wall').html(index2)
//     $('.blah').addClass('strike')
//   }
// }

module.exports = {
  failure,
  idFailure,
  uploadSuccess,
  deleteSuccess,
  getAllItemsSuccess,
  getAllItemsSuccess2,
  getAllItemsSuccess3
  // completedItemCross
}
