import React, { useState, useContext } from 'react'
import { auth } from '../firebase'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import '../css/Dropdown.css'
import { UserContext } from './App'
import avatar from '../media/main.jpg'


function Dropdown() {
    const {setUpload} = useContext(UserContext)
    const [open, setOpen] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="dropdown">
                <button onClick={() => setOpen((prev) => !prev)} className='dropdown__btn'>
                    <img src={avatar} className='avatar'></img>
                </button>
                {open ? (
                    <div className='dropdown__content'>
                        <a onClick={() => setUpload(true)}>Создать публикацию</a>
                        <a className='dropdown__logout' onClick={() => auth.signOut()}>Выйти</a>
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}

export default Dropdown
