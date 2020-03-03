import * as types from '../constants/ActionTypes'

export const uploadPic = (picture) => ({
  type: types.UPLOAD_PICTURE,
  payload: picture
})

export const saveCard = (card) => ({
  type: types.SAVE_CARD,
  payload: card
})

export const toggleModal = () => ({
  type: types.TOGGLE_MODAL
})

export const connectStorage = () => ({
    type: types.CONNECT_TO_STORAGE
})
