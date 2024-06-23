import React, { FC } from 'react'
import Style from './result.module.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { defaultCorrectCounter } from '../../redux/reducers/correctSlice'
import { defaultQustions } from '../../redux/reducers/questionsSlice'

const Result: FC = () => {
  const { correct } = useAppSelector(state => state.correctReducer)
  const { isAuth } = useAppSelector(state => state.isAuthReducer)
  const questions = useAppSelector(state => state.questionsReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (!isAuth) {
    return <Navigate to='/' />
  }

  const navigator = () => {
    dispatch(defaultCorrectCounter())
    dispatch(defaultQustions())
    navigate('/card')
  }

  return (
    <div className={Style.card__finish}>
      <img src="https://cdn-icons-png.flaticon.com/512/1320/1320719.png" height='150px' alt="" />
      <p>Вы отгадали {correct} ответа из {questions.length}</p>
      <button onClick={() => navigator()}>Попробовать снова</button>
    </div>
  )
}

export default Result