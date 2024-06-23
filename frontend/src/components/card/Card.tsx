import React, { FC, useState } from 'react'
import Style from './card.module.sass'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { increment } from '../../redux/reducers/correctSlice'


const Card: FC = () => {
  const [step, setStep] = useState<number>(0)
  const {isAuth} = useAppSelector(state => state.isAuthReducer)
  const dispatch = useAppDispatch()
  const questions = useAppSelector(state => state.questionsReducer)
  if (step === questions.length) {
    return <Navigate to='/result'/>
  }
  if (!isAuth) {
    return <Navigate to='/' />
  }
  const procces = Math.round(step / questions.length * 100)

  const correct = (idx: number): void => {
    if (questions[step].correct === idx) {
      dispatch(increment())
    }
    setStep(prev => prev + 1)
  }

  return (
    <div className={Style.card}>
      <div className={Style.card__line}>
        <div className={Style['card__line-aggregate']} style={{ width: `${procces}%` }}></div>
      </div>
      <h1>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((elem, idx) => (
          <li onClick={() => correct(idx)} key={idx}>{elem}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card