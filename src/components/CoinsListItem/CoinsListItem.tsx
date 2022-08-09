import { coinType } from '../../types/types'
import './CoinsListItem.css'

type ItemProps = coinType

const CoinsListItem = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
}: ItemProps) => {
  const numberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className='list_item'>
      <div className='item_details'>
        <div className='item_image_container'>
          <img src={image} alt={name} />
        </div>
        <div>
          <p className='item_name'>{name}</p>
          <p>0.5 * ${numberWithCommas(Number(current_price.toFixed(2)))}</p>
        </div>
      </div>
      <div className='item_value_container'>
        <p
          style={
            price_change_percentage_24h.toString().includes('-')
              ? { color: 'red' }
              : { color: 'green' }
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className='item_value'>${numberWithCommas(5000)}</p>
      </div>
    </div>
  )
}

export default CoinsListItem
