import React, { useState, useEffect, createContext, Profiler } from 'react';
import '../css/App.css';
import Histories from './Histories';
import Post from './Post'
import Modal from './Modal'
import { auth, db } from '../firebase'
import Dropdown from './Dropdown';
import Upload from './Upload'



export const UserContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [upload, setUpload] = useState(false)
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({ username: '', password: '', username: '' })


  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data(),
      })))
    })
  }, [])


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        setUser(authUser)
        if (authUser.displayName) {

        } else {
          return authUser.updateProfile({
            displayName: formData.username
          })
        }
      } else {
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [user, formData.username])


  if (!posts || posts.length === 0)
    return (
      <p>Loading...</p>
    )

  return (
    <div className="App">
      <UserContext.Provider value={{
        formData, setFormData, user, setUser,
        setOpen, setUpload
      }}>
        <Upload open={upload} setOpen={setUpload} />
        <Modal open={open} setOpen={setOpen} />
        <div className='app__header'>
          <h1>Instagram</h1>
          {user ? (<Dropdown />)
            : (
              <button className='btn' onClick={() => setOpen(true)}>Войти</button>
            )}
        </div>
        <div className='container'>
          <Histories />
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postId={id}
              post={post} />
          ))}
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
