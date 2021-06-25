import React, {useContext } from 'react'
import '../css/Auth.css'
import { auth } from '../firebase'
import { UserContext } from './App'

function SignUp({ login }) {

    const { setOpen } = useContext(UserContext)
    const { formData } = useContext(UserContext)
    const { setFormData } = useContext(UserContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const signUp = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: formData.username
                })
            })
            .catch(() => alert('Пожалуйста заполните данные полностью'))
        setOpen(false)
    }


    return (
        <div className='login'>
            <div>
                <div className='login__form'>
                    <form className='signup'>
                        <h1 className='login__logo'>Instagram</h1>
                        <div className='input__container' id="input">
                            <input
                                onChange={handleChange}
                                value={formData.email}
                                type='email'
                                name='email'
                                placeholder='Эл.почта'
                                className='login__input' />
                            <input
                                onChange={handleChange}
                                value={formData.username}
                                name='username'
                                placeholder='Имя пользователя'
                                className='login__input' />
                            <input
                                onChange={handleChange}
                                value={formData.password}
                                type='password'
                                name='password'
                                placeholder='Пароль'
                                className='login__input' />
                        </div>
                        <button type='submit' className='btn block my-10' onClick={signUp}>Регистрация</button>
                    </form>
                </div>
                <div className='login__signup'>
                    <p>Есть аккаунт?</p>
                    <a onClick={() => login(true)} className='link'>Вход</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp
