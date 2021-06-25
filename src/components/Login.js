import React, { useState, useContext, useEffect } from 'react'
import '../css/Auth.css'
import iphone from '../media/iphone.jpg'
import { auth } from '../firebase'
import { UserContext } from './App'



function Login({ login }) {

    const { setOpen } = useContext(UserContext)
    const {formData} = useContext(UserContext)
    const {setFormData} = useContext(UserContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(formData.email, formData.password)
            .catch(() => alert('Неверный логин или пароль'))
        setOpen(false)
    }

    return (
        <div className='login'>
            {/* <div className='login__img'>
                <img src={iphone}/>
            </div> */}
            <div>
                <div className='login__form'>
                    <form noValidate>
                        <h1 className='login__logo'>Instagram</h1>
                        <input
                            onChange={handleChange}
                            value={formData.email}
                            type='email'
                            name='email'
                            placeholder='Эл.почта'
                            className='login__input' />
                        <input
                            onChange={handleChange}
                            value={formData.password}
                            type='password'
                            name='password'
                            className='login__input'
                            placeholder='Пароль' />
                        <button onClick={signIn} type='submit' className='btn block my-10'>Войти</button>
                    </form>
                    <div>
                        <a className='login__forgot'>Забыли пароль?</a>
                    </div>
                </div>
                <div className='login__signup'>
                    <p>У вас еще нет аккаунта?</p>
                    <a onClick={() => login(false)} className='link'>Зарегистрироваться</a>
                </div>
            </div>
        </div>
    )
}

export default Login
