import React, { useState, useContext } from 'react'
import firebase from 'firebase'
import { storage, db } from '../firebase'
import { UserContext } from './App'
import '../css/Upload.css'


function ImageUpload() {
    const { user } = useContext(UserContext)
    const [caption, setCaption] = useState('')
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadPost = storage.ref(`images/${image.name}`).put(image)
        uploadPost.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                alert(error.message)
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            image: url,
                            user: user.displayName
                        })
                        setProgress(0)
                        setCaption('')
                        setImage(null)
                    })
            }
        )
    }

    return (
        <div className='upload'>
            <input
                type='text'
                placeholder='Введите описание публикации...'
                className='upload__input'
                value={caption}
                onChange={e => setCaption(e.target.value)}
            />
            <input
                accept='image/*'
                className='upload__file'
                type='file'
                onChange={handleChange}
                id="contained-button-file"
            />
            {/* <label htmlFor='contained-button-file'>
                <button className='upload__button' component="span">+ Выбрать фото</button>
            </label> */}
            {progress !== 0 ?
                <>
                    <progress className='upload__progress' value={progress} max='100' />
                    <p>{progress}%</p>
                </>
                : null}
            <button onClick={handleUpload} className='btn my-10 block'>Загрузить</button>
        </div>
    )
}

export default ImageUpload
