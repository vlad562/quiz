import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      title: 'Что такое React ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0
    },
    {
      title: 'Компонент - это?',
      variants: ['приложение', 'часть приложения или страницы', 'объект'],
      correct: 1
    },
    {
      title: 'Что такое JSX ?',
      variants: ['Это простой HTML', 'Это функция', 'Это тот же HTML, но с возможностью выполнять JS-код'],
      correct: 2
    },
]

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    defaultQustions: state => {
      state = initialState
    },
  },
})

export const questionsReducer = questionsSlice.reducer
export const { defaultQustions } = questionsSlice.actions