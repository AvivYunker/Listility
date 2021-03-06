import { RiFileListLine } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const links = [
  { id:"AllListsLink", key: 1, text: 'all lists', path: 'all-lists', icon: <RiFileListLine /> },
  { id:"SettingsLink", key: 2, text: 'Settings', path: 'settings', icon: <FiSettings /> },
  { id:"AboutLink", key: 3, text: 'About', path: 'about', icon: <AiOutlineInfoCircle /> },
]

export default links
