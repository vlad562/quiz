import React, { FC, useEffect, useState } from 'react'
import Style from './main.module.sass'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm } from '../../interface/mainInterface'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { login } from '../../redux/reducers/isAuthSlice'

const Main: FC = () => {
  const {isAuth} = useAppSelector(state => state.isAuthReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: "onChange"
  })

  useEffect(() => {
    if (isAuth) { navigate('/card') }
  },[isAuth])

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data.email)
    const post = {
      email: data.email,
      password: data.password
    }
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })
    if (res.ok) {
      console.log(res)
      dispatch(login())
      return
    }
    alert('Не удалось зарегистрироваться')
  }

  return (
    <div className={Style.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', {
          required: true,
          pattern: {
            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
            message: 'Введите валидный email',
          }
        })}
          placeholder='Email'
        />
        {errors.email?.message && errors.email?.message}
        <input {...register('password', {
          required: true,
          minLength: {
            value: 3,
            message: 'Длинна не менее 3'
          }
        })}
          placeholder='Password'
        />
        {errors.password?.message && errors.password?.message}
        <button>Send</button>
      </form>
    </div>
  )
}

export default Main