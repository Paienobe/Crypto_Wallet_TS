import React from 'react'
import { FaCaretDown, FaChartPie } from 'react-icons/fa'
import { AiOutlinePieChart, AiOutlineArrowDown } from 'react-icons/ai'
import TotalAssets from '../components/TotalAssets/TotalAssets'
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { RootStateType } from '../store/store'
import CoinsListItem from '../components/CoinsListItem/CoinsListItem'
import { coinType } from '../types/types'

const Home = () => {
  const { coins } = useSelector((store: RootStateType) => {
    return store.coinsList
  })
  return (
    <section className='home'>
      <div className='home_header'>
        <div className='home_wallet_selection'>
          <p>Main Wallet</p>
          <FaCaretDown />
        </div>

        <AiOutlinePieChart size={20} />
      </div>

      <TotalAssets />
      <div className='coins_container'>
        <div className='container_title'>
          <p>Value</p>
          <AiOutlineArrowDown />
        </div>
        {coins.map((coin: coinType) => {
          return <CoinsListItem key={coin.id} {...coin} />
        })}
      </div>
      <Footer />
    </section>
  )
}

export default Home
