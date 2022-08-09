import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { coinType } from '../../types/types'

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

type stateType = {
  coins: coinType[]
  isLoading: boolean
  isError: boolean
}

const initialState: stateType = {
  coins: [],
  isLoading: false,
  isError: false,
}

export const getCoins = createAsyncThunk('coinlist/getCoins', async () => {
  try {
    const response = await axios(url)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const coinListSlice = createSlice({
  name: 'coinsList',
  initialState,
  reducers: {
    clearCoins: (state) => {
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getCoins.fulfilled, (state, { payload }) => {
      state.coins = payload
      state.isLoading = false
      state.isError = false
    })

    builder.addCase(getCoins.rejected, (state) => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export default coinListSlice.reducer
