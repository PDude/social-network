let initialState = {
    friendsData: [
        { id: 1, name: '🦊 Evgeniy', imgPath: 'https://i.pinimg.com/originals/f5/fc/01/f5fc01ede5e7c45dce87e254bcaa47f3.jpg' },
        { id: 2, name: '🐵 Inokentiy', imgPath: 'https://media3.s-nbcnews.com/j/newscms/2016_19/1534611/160512-kim-jong-un-mn-1120_5389173fd689ee3897b1d11eb0fdd360.fit-760w.JPG' },
        { id: 3, name: '🐶 Alexandr', imgPath: 'https://36.media.tumblr.com/fa3920dcc2aa4f62d628cd6137f2b338/tumblr_napw0nVs1D1twug9co1_1280.jpg' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer