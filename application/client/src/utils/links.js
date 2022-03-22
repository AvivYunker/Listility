import { RiFileListLine } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const links = [
  { id: 1, text: 'all lists', path: 'all-lists', icon: <RiFileListLine /> },
  { id: 2, text: 'Settings', path: 'settings', icon: <FiSettings /> },
  { id: 3, text: 'About', path: 'about', icon: <AiOutlineInfoCircle /> },
]

export default links
