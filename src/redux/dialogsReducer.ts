const ADD_MESSAGE = 'ADD_MESSAGE'

type DialogType = {
  id: number
  name: string
  imgPath: string
}

type MessageType = {
  id: number
  text: string
}

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: '🦊 Shalldon',
      imgPath:
        'https://assets.vogue.com/photos/5aba68da50ba394ce3a6850e/master/w_1600,c_limit/01-story-korean-models-skin-care.jpg'
    },
    {
      id: 2,
      name: '🐵 Hasdegar',
      imgPath:
        'https://i.pinimg.com/originals/81/f3/9d/81f39daae8c1ebd09a493b7eaa7f15db.jpg'
    },
    {
      id: 3,
      name: '🐶 Sheradar',
      imgPath:
        'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg'
    },
    {
      id: 4,
      name: '🦝 Zenesz',
      imgPath:
        'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg'
    },
    {
      id: 5,
      name: '🐱 Ahri Kun',
      imgPath:
        'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg'
    },
    {
      id: 6,
      name: '🐗 Kiyomasa',
      imgPath:
        'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg'
    },
    {
      id: 7,
      name: '🦊 Shalldon',
      imgPath:
        'https://assets.vogue.com/photos/5aba68da50ba394ce3a6850e/master/w_1600,c_limit/01-story-korean-models-skin-care.jpg'
    },
    {
      id: 8,
      name: '🐵 Hasdegar',
      imgPath:
        'https://i.pinimg.com/originals/81/f3/9d/81f39daae8c1ebd09a493b7eaa7f15db.jpg'
    },
    {
      id: 9,
      name: '🐶 Sheradar',
      imgPath:
        'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg'
    },
    {
      id: 10,
      name: '🦝 Zenesz',
      imgPath:
        'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg'
    },
    {
      id: 11,
      name: '🐱 Ahri Kun',
      imgPath:
        'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg'
    },
    {
      id: 12,
      name: '🐗 Kiyomasa',
      imgPath:
        'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg'
    },
    {
      id: 13,
      name: '🐶 Sheradar',
      imgPath:
        'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg'
    },
    {
      id: 14,
      name: '🦝 Zenesz',
      imgPath:
        'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg'
    },
    {
      id: 15,
      name: '🐱 Ahri Kun',
      imgPath:
        'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg'
    },
    {
      id: 16,
      name: '🐗 Kiyomasa',
      imgPath:
        'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg'
    }
  ] as Array<DialogType>,
  messagesData: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'I wannna give my BDO account' },
    { id: 3, text: 'Would you receive it?' },
    { id: 4, text: 'Nice!' },
    { id: 5, text: 'Hi' },
    { id: 6, text: 'I wannna give my BDO account' },
    { id: 7, text: 'Would you receive it?' },
    { id: 8, text: 'Nice!' },
    { id: 9, text: 'Hi' },
    { id: 10, text: 'I wannna give my BDO account' },
    { id: 11, text: 'Would you receive it?' },
    { id: 12, text: 'Nice!' },
    { id: 13, text: 'Hi' },
    { id: 14, text: 'I wannna give my BDO account' },
    { id: 15, text: 'Would you receive it?' },
    { id: 16, text: 'Nice!' }
  ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 17, text: action.message }]
      }
    default:
      return state
  }
}

type AddMessageType = {
  type: typeof ADD_MESSAGE
  message: string
}

export const addMessage = (message: string): AddMessageType => ({
  type: ADD_MESSAGE,
  message
})

export default dialogsReducer
