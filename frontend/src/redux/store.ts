import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { questionsReducer } from './reducers/questionsSlice'
import { correctReducer } from './reducers/correctSlice'
import { isAuthReducer } from './reducers/isAuthSlice'

const rootReducer = combineReducers({
  questionsReducer,
  correctReducer,
  isAuthReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
