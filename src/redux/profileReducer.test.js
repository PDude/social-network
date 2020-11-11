const { addPost, default: profileReducer, deletePost } = require('./profileReducer')

let state = {
    postsData: [
        { id: 1, likesCount: 15, sharesCount: 4, message: 'I started to create my own and first social network 💻', imgPath: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
        { id: 2, likesCount: 21, sharesCount: 6, message: 'Hello everyone, today I bought a bass, which I dreamed of buying for a very long time, I am so excited 🎸', imgPath: 'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        { id: 3, likesCount: 11, sharesCount: 2, message: 'Thanks guys for your supporting ❤️', imgPath: 'https://images.unsplash.com/photo-1559559404-aa6a607570a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }
    ]
} 

it('posts count should increase', () => {
    // test data
    let action = addPost('My nigga')
    
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(4)
})

it('message should be correct', () => {
    // test data
    let action = addPost('My nigga')
    
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.postsData[3].message).toBe('My nigga')
})

it('posts count should decrease after delete', () => {
    // test data
    let action = deletePost(1)
    
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(2)
})
