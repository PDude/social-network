import React from 'react'
import { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredFiled } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormElements/FormElements'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength300 = maxLengthCreator(300)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form_post}>
            <div className={style.post_form_textarea}>
                <Field name={'post'} placeholder='Make some post ..' component={Textarea}
                    validate={[requiredFiled, maxLength300]} />
            </div>
            <button>
                Post! ✈
            </button>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'profilePostForm' })(PostForm)

const MyPosts = (props) => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != props || nextState != state
    // }   

    let postsElements = props.postsData.map(post => <Post
        id={post.id}
        key={post.id}
        likesCount={post.likesCount}
        sharesCount={post.sharesCount}
        message={post.message}
        imgPath={post.imgPath}
        profile={props.profile}
    />)

    const onAddPost = (values) => {
        props.addPost(values.post)
    }

    return (
        <div className={style.posts}>
            <PostReduxForm onSubmit={onAddPost} />
            <hr />
            <div className={style.posts_wrap}>
                {postsElements}
            </div>
        </div >
    )
}

export default MyPosts

