import { BsWallet2 } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  const icons = [BsWallet2, BiTransfer, CgNotes, AiOutlineSetting]
  return (
    <footer>
      {icons.map((Icon, index) => (
        <Icon key={index} size={25} />
      ))}
    </footer>
  )
}

export default Footer
