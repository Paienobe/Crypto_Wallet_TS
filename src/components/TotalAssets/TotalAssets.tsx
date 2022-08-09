import './TotalAssets.css'

const TotalAssets = () => {
  return (
    <div className='total_assets_container'>
      <h1 className='total'>$40,000</h1>
      <p className='asset_performance'>
        +$7,296 (18.24%) <span>for all time</span>
      </p>
      <div className='total_assets_button_container'>
        <button>Deposit</button>
        <button>Withdraw</button>
      </div>
    </div>
  )
}

export default TotalAssets
