import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, likesCount: 15, sharesCount: 4, message: 'I started to create my own and first social network 💻', imgPath: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
                { id: 2, likesCount: 21, sharesCount: 6, message: 'Hello everyone, today I bought a bass, which I dreamed of buying for a very long time, I am so excited 🎸', imgPath: 'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
                { id: 3, likesCount: 11, sharesCount: 2, message: 'Thanks guys for your supporting ❤️', imgPath: 'https://images.unsplash.com/photo-1559559404-aa6a607570a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: '🦊 Shalldon', imgPath: 'https://assets.vogue.com/photos/5aba68da50ba394ce3a6850e/master/w_1600,c_limit/01-story-korean-models-skin-care.jpg' },
                { id: 2, name: '🐵 Hasdegar', imgPath: 'https://i.pinimg.com/originals/81/f3/9d/81f39daae8c1ebd09a493b7eaa7f15db.jpg' },
                { id: 3, name: '🐶 Sheradar', imgPath: 'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg' },
                { id: 4, name: '🦝 Zenesz', imgPath: 'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg' },
                { id: 5, name: '🐱 Ahri Kun', imgPath: 'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg' },
                { id: 6, name: '🐗 Kiyomasa', imgPath: 'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg' },
                { id: 7, name: '🦊 Shalldon', imgPath: 'https://assets.vogue.com/photos/5aba68da50ba394ce3a6850e/master/w_1600,c_limit/01-story-korean-models-skin-care.jpg' },
                { id: 8, name: '🐵 Hasdegar', imgPath: 'https://i.pinimg.com/originals/81/f3/9d/81f39daae8c1ebd09a493b7eaa7f15db.jpg' },
                { id: 9, name: '🐶 Sheradar', imgPath: 'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg' },
                { id: 10, name: '🦝 Zenesz', imgPath: 'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg' },
                { id: 11, name: '🐱 Ahri Kun', imgPath: 'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg' },
                { id: 12, name: '🐗 Kiyomasa', imgPath: 'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg' },
                { id: 13, name: '🐶 Sheradar', imgPath: 'https://i.pinimg.com/originals/70/d0/0f/70d00fc24caa9a5d78a6c36b47482e8b.jpg' },
                { id: 14, name: '🦝 Zenesz', imgPath: 'https://i.pinimg.com/originals/55/a9/d6/55a9d6178f4f60c4399b35bc7072df53.jpg' },
                { id: 15, name: '🐱 Ahri Kun', imgPath: 'https://s-media-cache-ak0.pinimg.com/736x/57/dc/73/57dc73019169435097f0543bab528824.jpg' },
                { id: 16, name: '🐗 Kiyomasa', imgPath: 'https://i.pinimg.com/originals/fe/a1/77/fea1772659cd1847f2cf96cb475d9ad4.jpg' }
            ],
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
            ],
            newMessageText: ''
        },
        sidebar: {
            friendsData: [
                { id: 1, name: '🦊 Evgeniy', imgPath: 'https://i.pinimg.com/originals/f5/fc/01/f5fc01ede5e7c45dce87e254bcaa47f3.jpg' },
                { id: 2, name: '🐵 Inokentiy', imgPath: 'https://media3.s-nbcnews.com/j/newscms/2016_19/1534611/160512-kim-jong-un-mn-1120_5389173fd689ee3897b1d11eb0fdd360.fit-760w.JPG' },
                { id: 3, name: '🐶 Alexandr', imgPath: 'https://36.media.tumblr.com/fa3920dcc2aa4f62d628cd6137f2b338/tumblr_napw0nVs1D1twug9co1_1280.jpg' }
            ]
        },
        usersPage: {}
    },
    _callSubscriber() {
        console.log('State has been changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store