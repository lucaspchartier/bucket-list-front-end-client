const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onUpload = (event) => {
  event.preventDefault()
  const uploadData = getFormFields(event.target)
  if (uploadData.item.title === '' || uploadData.item.text === '') {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Fields cannot be empty`)
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    $(event.target).trigger('reset')
    setTimeout(() => $('.upload-message-box').fadeOut(200).empty(200), 2500)
  } else {
    $(event.target).trigger('reset')
    api.upload(uploadData.item.title, uploadData.item.text)
      .then(ui.uploadSuccess)
      .then(() => onGetAllItems(event))
      .catch(ui.failure)
  }
}

const onGetAllItems = (event) => {
  event.preventDefault()
  api.getAllItems()
    .then(ui.getAllItemsSuccess)
    .catch(ui.failure)
}

// un crossed off item
const onGetAllItems2 = (event) => {
  event.preventDefault()
  api.getAllItems()
    .then(ui.getAllItemsSuccess2)
    .catch(ui.failure)
}

const onGetAllItems3 = (event) => {
  event.preventDefault()
  api.getAllItems()
    .then(ui.getAllItemsSuccess3)
    .catch(ui.failure)
}

const onTextUpdate = (event) => {
  event.preventDefault()
  const id = $(event.target).parent('div').data('id')
  const caption = $('.update-text-form-' + event.target.attributes['data-id'].value).val()
  api.textUpdate(id, caption)
    .then(() => onGetAllItems(event))
  // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}

const onTitleUpdate = (event) => {
  event.preventDefault()
  const id = $(event.target).parent('div').data('id')
  const title = $('.update-title-form-' + event.target.attributes['data-id'].value).val()
  api.titleUpdate(id, title)
    .then(() => onGetAllItems(event))
  // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}

const onDeleteItem = (event) => {
  event.preventDefault()
  const _id = $(event.target).parents('div').data('id')
  api.deleteItemById(_id)
    .then(ui.deleteSuccess)
    .then(() => onGetAllItems(event))
    .catch(ui.failure)
}

const onCompleteItem = (event) => {
  event.preventDefault()
  const _id = $(event.target).parents('div').data('id')
  api.completeItemById(_id)
    // .then(ui.completedItemCross)
    .then(() => onGetAllItems(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.upload-area').on('submit', onUpload)
  $('.get-all-item-btn').on('click', onGetAllItems)
  $('.get-incomplete-item-btn').on('click', onGetAllItems2)
  $('.get-completed-item-btn').on('click', onGetAllItems3)
  $('.item-wall').on('submit', '.text-update', onTextUpdate)
  $('.item-wall').on('submit', '.title-update', onTitleUpdate)
  $('.item-wall').on('click', '.zzz', onDeleteItem)
  $('.item-wall').on('click', '.yyy', onCompleteItem)
  // $('.item-wall').on('click', '.item-update-btn', onGetAllItems)
}

module.exports = {
  onUpload,
  onGetAllItems,
  onGetAllItems2,
  onGetAllItems3,
  onDeleteItem,
  onCompleteItem,
  onTextUpdate,
  onTitleUpdate,
  addHandlers
}
