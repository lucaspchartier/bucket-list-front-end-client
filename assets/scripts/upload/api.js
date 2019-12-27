'use strict'

const store = require('../store.js')
const config = require('../config.js')

const upload = (title, text) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'title': title,
          'text': text,
          'completed': false,
          'user_id': store.user.id
        }
      })
  })
}

const textUpdate = (_id, text) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'text': text,
          'user_id': store.user.id
        }
      })
  })
}

const titleUpdate = (_id, title) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'title': title,
          'user_id': store.user.id
        }
      })
  })
}

const completeItemById = (_id, title) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'completed': true,
          'user_id': store.user.id
        }
      })
  })
}

const getAllItems = inputData => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/items/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const deleteItemById = _id => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const getImageId = imageId => {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/images/' + imageId,
//     contentType: 'application/json',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  upload,
  getAllItems,
  deleteItemById,
  completeItemById,
  textUpdate,
  titleUpdate
}
