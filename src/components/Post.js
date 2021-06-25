import React, { useEffect, useState, useContext } from 'react'
import '../css/Post.css'
import { db } from '../firebase'
import firebase from 'firebase'
import { UserContext } from './App'
import avatar from '../media/main.jpg'


function Post({ postId, post }) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState(null)
    const { user } = useContext(UserContext)

    useEffect(() => {
        let unsubscribe
        if (postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()))
                })
        }

        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (e) => {
        e.preventDefault()
        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }


    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };

    return (
        <div className='post'>
            <div className='post__header'>
                <img src={avatar} className='avatar'></img>
                <a href='' className='post__username'>{post.user}</a>
            </div>
            <img className='post__image' src={post.image} alt='post image' />
            <p className='post__text'><strong>{post.user}</strong> {post.caption}</p>

            <div className='post__comments'>
                {comments.map((comment) => (
                    <>
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    </>
                ))}
                <p className='post__timestamp'>{new Date(post.timestamp).toLocaleDateString("ru-RU", options)}</p>
            </div>

            {user && (
                <form className='post__footer'>
                    <input
                        className='post__input'
                        type='text'
                        placeholder='Добавьте комментарий...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        disabled={!comment}
                        onClick={postComment}
                        type='submit'
                        className='post__button'
                    >Опубликовать
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post
