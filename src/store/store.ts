import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from '../features/coinlist/coinListSlice'

export const store = configureStore({
  reducer: {
    coinsList: coinsReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
